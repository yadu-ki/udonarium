import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { FileArchiver } from '../../class/core/file-storage/file-archiver';
import { ImageStorage } from '../../class/core/file-storage/image-storage';
import { ImageFile } from '../../class/core/file-storage/image-file';
import { EventSystem, Network } from '../../class/core/system/system';
import { PanelService } from '../../service/panel.service';

@Component({
  selector: 'file-storage',
  templateUrl: './file-storage.component.html',
  styleUrls: ['./file-storage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileStorageComponent implements OnInit, OnDestroy, AfterViewInit {

  fileStorageService = ImageStorage.instance;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private panelService: PanelService
  ) { }

  ngOnInit() {
    this.panelService.title = 'ファイル一覧';
  }

  ngAfterViewInit() {
    EventSystem.register(this).on('SYNCHRONIZE_FILE_LIST', 0, event => {
      if (event.isSendFromSelf) {
        console.log('FileStorageComponent changeDetector.markForCheck');
        this.changeDetector.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    EventSystem.unregister(this);
  }

  handleFileSelect(event: Event) {
    let files = (<HTMLInputElement>event.target).files;
    if (files.length) FileArchiver.instance.load(files);
  }

  onSelectedFile(file: ImageFile) {
    console.log('onSelectedFile', file);
    EventSystem.call('SELECT_FILE', { fileIdentifier: file.identifier }, Network.peerId);
  }
}
