(function() {
  'use strict';

  angular
    .module('etherkopen2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($sce) {
    var vm = this;

    vm.date = new Date();

    vm.baseSwapUrl = 'https://swap.innocoin.com/#/';
    vm.baseUrl = 'https://www.innocoin.com';

    vm.updateIframes = function() {
      vm.iframe1 =  $sce.trustAsResourceUrl(vm.baseSwapUrl + '?language=nederlands&partner_email=partner@innocoin.com&partner_name=etherkopen.nl&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=5&show_info=true&theme=white_carbon&rounded_corners=false&width=500&height=470&border=false&iframe=true');
      vm.iframe2 =  $sce.trustAsResourceUrl(vm.baseUrl + '/trades#language=nederlands&bgcolor=#fff&scheme=light&hidetitle=true&iframe=true&sidepadding=true&results=12');
    };

    vm.updateIframes();


  }
})();
