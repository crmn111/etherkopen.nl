(function() {
  'use strict';

  angular
    .module('etherkopen2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      }).state('manual', {
          url: '/uitleg-ethereum-wallet-installeren-en-daarna-ether-kopen',
          templateUrl: 'app/content/manual.html',
          controller: 'ManualController',
          controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
