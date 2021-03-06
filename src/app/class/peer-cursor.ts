import { Network, EventSystem } from './core/system/system';
import { ObjectStore } from './core/synchronize-object/object-store';
import { SyncObject, SyncVar } from './core/synchronize-object/decorator';
import { GameObject, ObjectContext } from './core/synchronize-object/game-object';
import { ImageStorage } from './core/file-storage/image-storage';
import { ImageFile } from './core/file-storage/image-file';
import { Transform, IPoint2D, IPoint3D } from './transform/transform';

@SyncObject('PeerCursor')
export class PeerCursor extends GameObject {
  @SyncVar() peerId: string = '';
  @SyncVar() name: string = '';
  @SyncVar() imageIdentifier: string = '';

  static myCursor: PeerCursor = null;
  private static hash: { [peerId: string]: string } = {};

  get isMine(): boolean { return (PeerCursor.myCursor && PeerCursor.myCursor === this); }
  get image(): ImageFile { return ImageStorage.instance.get(this.imageIdentifier); }

  initialize(needUpdate: boolean = true) {
    super.initialize(needUpdate);
    if (!this.isMine) {
      EventSystem.register(this)
        .on('CLOSE_OTHER_PEER', -1000, event => {
          if (event.data.peer !== this.peerId) return;
          delete PeerCursor.hash[this.peerId];
          ObjectStore.instance.remove(this);
        });
    }
  }

  destroy() {
    delete PeerCursor.hash[this.peerId];
    super.destroy();
  }

  static find(peerId): PeerCursor {
    let identifier = PeerCursor.hash[peerId];
    if (identifier != null && ObjectStore.instance.get(identifier)) return ObjectStore.instance.get<PeerCursor>(identifier);
    let cursors = ObjectStore.instance.getObjects<PeerCursor>(PeerCursor);
    for (let cursor of cursors) {
      if (cursor.peerId === peerId) {
        PeerCursor.hash[peerId] = cursor.identifier;
        return cursor;
      }
    }
    return null;
  }

  static createMyCursor(): PeerCursor {
    if (PeerCursor.myCursor) {
      console.warn('It is already created.');
      return;
    }
    PeerCursor.myCursor = new PeerCursor();
    PeerCursor.myCursor.peerId = Network.peerId;
    PeerCursor.myCursor.initialize();
    return PeerCursor.myCursor;
  }

  // override
  apply(context: ObjectContext) {
    if (context.syncData['peerId'] !== this.peerId) {
      PeerCursor.hash[context.syncData['peerId']] = PeerCursor.hash[this.peerId];
      delete PeerCursor.hash[this.peerId];
    }
    super.apply(context);
  }

  isPeerAUdon() {
    return /u.*d.*o.*n/ig.exec(this.peerId) != null;
  }
}
