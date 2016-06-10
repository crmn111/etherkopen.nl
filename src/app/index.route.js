(function () {
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
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Ether kopen (Ethereum) met Bitcoin',
                    pageDescription : 'Ether (ETH) is een verhandelbaar token/asset - U kunt hier gemakkelijk Ether (Ethereum) kopen met Bitcoin.'
                }
            }).state('manual', {
                url: '/uitleg-ethereum-wallet-installeren-en-daarna-ether-kopen',
                templateUrl: 'app/content/manual.html',
                controller: 'ManualController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Handleiding Ether Kopen',
                    pageDescription : 'Uitleg Ethereum wallet (Mist) installeren en ether kopen.'
                }
            }).state('chart', {
                url: '/chart/btc-eth',
                templateUrl: 'app/chart/chart.html'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
