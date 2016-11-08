(function() {
  'use strict';

  angular
    .module('etherkopen2')
    .controller('ManualController', ManualController);

  function ManualController($sce, $http) {
      var vm = this;

      vm.date = new Date();
      vm.max = 2.5;

      vm.baseSwapUrl = 'https://swap.innocoin.com/#/';

      vm.api = 'https://api.innocoin.com/v1/settings';

      vm.iframe1 =  $sce.trustAsResourceUrl(vm.baseSwapUrl + '?language=nederlands&partner_email=partner@innocoin.com&partner_name=etherkopen.nl&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=5&show_info=true&theme=white_carbon&rounded_corners=false&width=500&height=470&border=false&iframe=true');

      $http.get(vm.api).then(function(response) {
          vm.max = response.data.conversions.BTC_ETH.maxSource;
      });


  }
})();
