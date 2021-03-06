/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$upcase', '$===', '$to_i', '$!', '$nil?', '$getValue', '$checkRoll', '$roll', '$+', '$getValueText', '$==', '$collect', '$split', '$count', '$>', '$*', '$>=', '$parren_killer', '$<']);
  return (function($base, $super) {
    function $DarkSouls(){};
    var self = $DarkSouls = $klass($base, $super, 'DarkSouls', $DarkSouls);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_8, TMP_9, TMP_10;

    self.$setPrefixes(["(\\d+)?(A)?DS([\\+\\-\\d+]*)(\\@\\d+)?"]);

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      return ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "ダークソウルTRPG";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "DarkSouls";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "・行為判定：[n]DS[a±b][@t]　　[]内のコマンドは省略可\n・能動判定：[n]ADS[a±b][@t]　　FP消費を判定\n　n：ダイス数。省略時は「2」\n　a±b：修正値。「1+2-1」のように、複数定可\n　@t：目標値。省略時は達成値を、指定時は判定の正否を表示\n例）DS → 2D6の達成値を表示\n　　1DS → 1D6の達成値を表示\n　　ADS+2-2 → 2D6+2の達成値を表示（能動判定）\n　　DS+2@10 → 2D6+2で目標値10の判定\n";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$rollDiceCommand', TMP_5 = function $$rollDiceCommand(command) {
      var $a, self = this, output = nil, $case = nil, reg1 = nil, reg2 = nil, reg3 = nil, reg5 = nil, diceCount = nil, isActive = nil, modify = nil, target = nil;

      output = (function() {$case = command.$upcase();if (/(\d+)?(A)?DS([\+\-\d+]*)(\@(\d+))?$/i['$===']($case)) {reg1 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      reg2 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      reg3 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      reg5 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5));
      diceCount = (((($a = reg1) !== false && $a !== nil && $a != null) ? $a : 2)).$to_i();
      isActive = reg2['$nil?']()['$!']();
      modify = self.$getValue(reg3);
      target = (((($a = reg5) !== false && $a !== nil && $a != null) ? $a : 0)).$to_i();
      return self.$checkRoll(diceCount, isActive, modify, target);}else {return nil}})();
      return output;
    }, TMP_5.$$arity = 1);

    Opal.defn(self, '$checkRoll', TMP_8 = function $$checkRoll(diceCount, isActive, modify, target) {
      var $a, $b, TMP_6, $c, TMP_7, self = this, dice = nil, diceText = nil, successValue = nil, modifyText = nil, targetText = nil, diceArray = nil, focusDamage = nil, focusText = nil, result = nil;

      $b = self.$roll(diceCount, 6), $a = Opal.to_ary($b), dice = ($a[0] == null ? nil : $a[0]), diceText = ($a[1] == null ? nil : $a[1]), $b;
      successValue = $rb_plus(dice, modify);
      modifyText = self.$getValueText(modify);
      targetText = ((function() {if (target['$=='](0)) {
        return ""
        } else {
        return ">=" + (target)
      }; return nil; })());
      if ((($a = (isActive)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        diceArray = ($a = ($b = diceText.$split(/,/)).$collect, $a.$$p = (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
        return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6), $a).call($b);
        focusDamage = ($a = ($c = diceArray).$count, $a.$$p = (TMP_7 = function(i){var self = TMP_7.$$s || this;
if (i == null) i = nil;
        return i['$=='](1)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7), $a).call($c);
        if ((($a = ($rb_gt(focusDamage, 0))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          focusText = $rb_times("■", focusDamage);
          focusText = "（FP" + (focusText) + "消費）";};};
      result = "(" + (diceCount) + "D6" + (modifyText) + (targetText) + ")";
      result = $rb_plus(result, " ＞ " + (dice) + "(" + (diceText) + ")" + (modifyText));
      result = $rb_plus(result, " ＞ " + (successValue) + (targetText));
      if ((($a = ($rb_gt(target, 0))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        if ((($a = ($rb_ge(successValue, target))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          result = $rb_plus(result, " ＞ 【成功】")
          } else {
          result = $rb_plus(result, " ＞ 【失敗】")
        }};
      result = $rb_plus(result, "" + (focusText));
      return result;
    }, TMP_8.$$arity = 4);

    Opal.defn(self, '$getValue', TMP_9 = function $$getValue(text) {
      var $a, self = this;

      ((($a = text) !== false && $a !== nil && $a != null) ? $a : text = "");
      return self.$parren_killer("(0" + (text) + ")").$to_i();
    }, TMP_9.$$arity = 1);

    return (Opal.defn(self, '$getValueText', TMP_10 = function $$getValueText(value) {
      var $a, self = this;

      if ((($a = (value['$=='](0))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ""};
      if ((($a = ($rb_lt(value, 0))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return "" + (value)};
      return "+" + (value);
    }, TMP_10.$$arity = 1), nil) && 'getValueText';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);
