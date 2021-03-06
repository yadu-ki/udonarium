/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$debug', '$===', '$getReimonCompensationTableResult', '$to_i', '$getGetMaterialTableResult', '$empty?', '$get_table_by_1d6', '$get_table_by_d66', '$+', '$getMaterialEffect', '$getPrice', '$nil?', '$roll', '$<', '$getMaterialEffectNomal', '$getMaterialEffectRare', '$getD66', '$bcdice', '$get_table_by_number', '$getMaterialEffectPower', '$sub', '$>', '$getAttribute', '$[]']);
  return (function($base, $super) {
    function $Kamigakari(){};
    var self = $Kamigakari = $klass($base, $super, 'Kamigakari', $Kamigakari);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, TMP_10, TMP_11, TMP_12, TMP_13;

    self.$setPrefixes(["RT", "MT(\\d*)"]);

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
      self.sendMode = 2;
      self.sortType = 1;
      return self.d66Type = 1;
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "神我狩";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "Kamigakari";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "・各種表\n ・感情表(ET)\n ・霊紋消費の代償表(RT)\n ・伝奇名字・名前決定表(NT)\n ・魔境臨界表(KT)\n ・獲得素材チャート(MTx xは［法則障害］の［強度］。省略時は１)\n　　例） MT　MT3　MT9\n・D66ダイスあり\n";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$rollDiceCommand', TMP_5 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, tableName = nil, result = nil, $case = nil, number = nil, rank = nil, text = nil;

      tableName = "";
      result = "";
      self.$debug("rollDiceCommand command", command);
      $case = command;if ("RT"['$===']($case)) {$b = self.$getReimonCompensationTableResult(), $a = Opal.to_ary($b), tableName = ($a[0] == null ? nil : $a[0]), result = ($a[1] == null ? nil : $a[1]), number = ($a[2] == null ? nil : $a[2]), $b}else if (/^MT(\d*)$/['$===']($case)) {rank = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      ((($a = rank) !== false && $a !== nil && $a != null) ? $a : rank = 1);
      rank = rank.$to_i();
      $b = self.$getGetMaterialTableResult(rank), $a = Opal.to_ary($b), tableName = ($a[0] == null ? nil : $a[0]), result = ($a[1] == null ? nil : $a[1]), number = ($a[2] == null ? nil : $a[2]), $b;}else {self.$debug("rollDiceCommand commandNOT matched -> command:", command);
      return "";};
      if ((($a = (result['$empty?']())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ""};
      text = "" + (tableName) + "(" + (number) + ")：" + (result);
      return text;
    }, TMP_5.$$arity = 1);

    Opal.defn(self, '$getReimonCompensationTableResult', TMP_6 = function $$getReimonCompensationTableResult() {
      var $a, $b, self = this, tableName = nil, table = nil, result = nil, number = nil;

      tableName = "霊紋消費の代償表";
      table = ["邪神化：物理法則を超過しすぎた代償として、霊魂そのものが歪み、PCは即座にアラミタマへと変貌する。アラミタマ化したPCは、いずこかへと消え去る。", "存在消滅：アラミタマ化を最後の力で抑え込む。だがその結果、PCの霊魂は燃え尽きてしまい、この世界から消滅する。そのPCは[状態変化：死亡]となり死体も残らない。", "死亡：霊魂の歪みをかろうじて食い止めるが、霊魂が崩壊する。PCは[状態変化：死亡]となるが遺体は残る。", "霊魂半壊：霊魂の歪みを食い止めるものの、霊魂そのものに致命的な負傷を受け、全身に障害が残る。それに伴って霊紋も消滅し、一般人へと戻る。", "記憶消滅：奇跡的に霊魂の摩耗による身体的な悪影響を免れる。時間を置くことで霊紋も回復するが、精神的に影響を受け、すべての記憶を失ってしまう。", "影響なし：奇跡的に、霊魂の摩耗による悪影響を完全に退け、さらに霊紋の回復も早期を見込める。肉体や精神にも、特に影響はない。"];
      $b = self.$get_table_by_1d6(table), $a = Opal.to_ary($b), result = ($a[0] == null ? nil : $a[0]), number = ($a[1] == null ? nil : $a[1]), $b;
      return [tableName, result, number];
    }, TMP_6.$$arity = 0);

    Opal.defn(self, '$getGetMaterialTableResult', TMP_7 = function $$getGetMaterialTableResult(rank) {
      var $a, $b, self = this, tableName = nil, table = nil, result = nil, number = nil, effect = nil, number2 = nil, price = nil;

      tableName = "獲得素材チャート";
      table = ["真紅の", "ざらつく", "紺碧の", "鋭い", "黄金の", "柔らかな", "銀色の", "尖った", "純白の", "硬い", "漆黒の", "輝く", "なめらかな", "濁った", "ふさふさの", "邪悪な", "粘つく", "聖なる", "灼熱の", "炎の", "氷結の", "氷の", "熱い", "風の", "冷たい", "雷の", "土の", "幻の", "骨状の", "刻印の", "牙状の", "鱗状の", "石状の", "宝石状の", "毛皮状の", "羽根状の"];
      $b = self.$get_table_by_d66(table), $a = Opal.to_ary($b), result = ($a[0] == null ? nil : $a[0]), number = ($a[1] == null ? nil : $a[1]), $b;
      result = $rb_plus(result, "断片");
      $b = self.$getMaterialEffect(rank), $a = Opal.to_ary($b), effect = ($a[0] == null ? nil : $a[0]), number2 = ($a[1] == null ? nil : $a[1]), $b;
      number = "" + (number) + "," + (number2);
      price = self.$getPrice(effect);
      result = "" + (result) + "。" + (effect);
      if ((($a = (price['$nil?']())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        result = $rb_plus(result, "：" + (price))
      };
      return [tableName, result, number];
    }, TMP_7.$$arity = 1);

    Opal.defn(self, '$getMaterialEffect', TMP_8 = function $$getMaterialEffect(rank) {
      var $a, $b, self = this, number = nil, result = nil, type = nil, number2 = nil;

      $b = self.$roll(1, 6), $a = Opal.to_ary($b), number = ($a[0] == null ? nil : $a[0]), $b;
      result = "";
      type = "";
      if ((($a = ($rb_lt(number, 6))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        $b = self.$getMaterialEffectNomal(rank), $a = Opal.to_ary($b), result = ($a[0] == null ? nil : $a[0]), number2 = ($a[1] == null ? nil : $a[1]), $b;
        type = "よく見つかる素材";
        } else {
        $b = self.$getMaterialEffectRare(), $a = Opal.to_ary($b), result = ($a[0] == null ? nil : $a[0]), number2 = ($a[1] == null ? nil : $a[1]), $b;
        type = "珍しい素材";
      };
      result = "" + (type) + "：" + (result);
      number = "" + (number) + "," + (number2);
      return [result, number];
    }, TMP_8.$$arity = 1);

    Opal.defn(self, '$getMaterialEffectNomal', TMP_9 = function $$getMaterialEffectNomal(rank) {
      var $a, $b, self = this, table = nil, isSwap = nil, number = nil, result = nil, power = nil, number2 = nil;

      table = [[13, "体力+n"], [16, "敏捷+n"], [23, "知性+n"], [26, "精神+n"], [33, "幸運+n"], [35, "物D+n"], [41, "魔D+n"], [43, "行動+n"], [46, "生命+n×3"], [53, "装甲+n"], [56, "結界+n"], [63, "移動+nマス"], [66, "※PCの任意"]];
      isSwap = false;
      number = self.$bcdice().$getD66(isSwap);
      result = self.$get_table_by_number(number, table);
      self.$debug("getMaterialEffectNomal result", result);
      if ((($a = (/\+n/['$==='](result))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        $b = self.$getMaterialEffectPower(rank), $a = Opal.to_ary($b), power = ($a[0] == null ? nil : $a[0]), number2 = ($a[1] == null ? nil : $a[1]), $b;
        result = result.$sub(/\+n/, "+" + (power));
        number = "" + (number) + "," + (number2);};
      return [result, number];
    }, TMP_9.$$arity = 1);

    Opal.defn(self, '$getMaterialEffectPower', TMP_10 = function $$getMaterialEffectPower(rank) {
      var $a, $b, self = this, table = nil, rankTable = nil, power = nil, number = nil;

      table = [[4, [1, 1, 1, 2, 2, 3]], [8, [1, 1, 2, 2, 3, 3]], [9, [1, 2, 3, 3, 4, 5]]];
      if ((($a = ($rb_gt(rank, 9))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        rank = 9};
      rankTable = self.$get_table_by_number(rank, table);
      $b = self.$get_table_by_1d6(rankTable), $a = Opal.to_ary($b), power = ($a[0] == null ? nil : $a[0]), number = ($a[1] == null ? nil : $a[1]), $b;
      return [power, number];
    }, TMP_10.$$arity = 1);

    Opal.defn(self, '$getMaterialEffectRare', TMP_11 = function $$getMaterialEffectRare() {
      var $a, $b, self = this, table = nil, number = nil, result = nil, attribute = nil, number2 = nil;

      table = [[3, "**付与"], [5, "**半減"], [6, "※GMの任意"]];
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), number = ($a[0] == null ? nil : $a[0]), $b;
      result = self.$get_table_by_number(number, table);
      self.$debug("getMaterialEffectRare result", result);
      if ((($a = (/\*\*/['$==='](result))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        $b = self.$getAttribute(), $a = Opal.to_ary($b), attribute = ($a[0] == null ? nil : $a[0]), number2 = ($a[1] == null ? nil : $a[1]), $b;
        result = result.$sub(/\*\*/, "" + (attribute));
        number = "" + (number) + "," + (number2);};
      return [result, number];
    }, TMP_11.$$arity = 0);

    Opal.defn(self, '$getAttribute', TMP_12 = function $$getAttribute() {
      var self = this, table = nil, isSwap = nil, number = nil, result = nil;

      table = [[21, "［火炎］"], [33, "［冷気］"], [43, "［電撃］"], [53, "［風圧］"], [56, "［幻覚］"], [62, "［魔毒］"], [64, "［磁力］"], [66, "［閃光］"]];
      isSwap = false;
      number = self.$bcdice().$getD66(isSwap);
      result = self.$get_table_by_number(number, table);
      return [result, number];
    }, TMP_12.$$arity = 0);

    return (Opal.defn(self, '$getPrice', TMP_13 = function $$getPrice(effect) {
      var $a, self = this, power = nil, $case = nil, table = nil, price = nil;

      power = 0;
      $case = effect;if (/\+(\d+)/['$===']($case)) {power = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i()}else if (/付与/['$===']($case)) {power = 3}else if (/半減/['$===']($case)) {power = 4}else {power = 0};
      table = [nil, "500G(効果値:1)", "1000G(効果値:2)", "1500G(効果値:3)", "2000G(効果値:4)", "3000G(効果値:5)"];
      price = table['$[]'](power);
      return price;
    }, TMP_13.$$arity = 1), nil) && 'getPrice';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);
