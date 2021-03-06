/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  return (function($base, $super) {
    function $Template(){};
    var self = $Template = $klass($base, $super, 'Template', $Template);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, TMP_10, TMP_11, TMP_12;

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      return ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$prefixs', TMP_2 = function $$prefixs() {
      var self = this;

      return [];
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_3 = function $$gameName() {
      var self = this;

      return "ゲーム名";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_4 = function $$gameType() {
      var self = this;

      return "GameType";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_5 = function $$getHelpMessage() {
      var self = this;

      return "ヘルプメッセージ\nダイスボットの使い方をここに記述します。\n";
    }, TMP_5.$$arity = 0);

    Opal.defn(self, '$changeText', TMP_6 = function $$changeText(string) {
      var self = this;

      return string;
    }, TMP_6.$$arity = 1);

    Opal.defn(self, '$rollDiceCommand', TMP_7 = function $$rollDiceCommand(command) {
      var self = this;

      return "";
    }, TMP_7.$$arity = 1);

    Opal.defn(self, '$check_2D6', TMP_8 = function $$check_2D6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      return "";
    }, TMP_8.$$arity = 8);

    Opal.defn(self, '$check_nD6', TMP_9 = function $$check_nD6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      return "";
    }, TMP_9.$$arity = 8);

    Opal.defn(self, '$check_nD10', TMP_10 = function $$check_nD10(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      return "";
    }, TMP_10.$$arity = 8);

    Opal.defn(self, '$check_1D100', TMP_11 = function $$check_1D100(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      return "";
    }, TMP_11.$$arity = 8);

    return (Opal.defn(self, '$check_1D20', TMP_12 = function $$check_1D20(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      return "";
    }, TMP_12.$$arity = 8), nil) && 'check_1D20';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);
