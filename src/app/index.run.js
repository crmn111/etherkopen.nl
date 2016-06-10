(function() {
  'use strict';

  angular
    .module('etherkopen2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope,$state) {

    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $rootScope.$statename = $state.$current.name.replace('.','-');
    });

  }

})();
