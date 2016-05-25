(function() {
  'use strict';

  angular
    .module('etherkopen2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.date = new Date();
  }
})();
