(function() {
  'use strict';

  angular
    .module('etherkopen2')
    .controller('ManualController', ManualController);

  function ManualController() {
      var vm = this;

      vm.date = new Date();
      vm.max = 2.5;



  }
})();
