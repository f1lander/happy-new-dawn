(function() {
    'use strict';

    function Cashier($stateProvider) {
        $stateProvider.state('cashier example page', {
            url: '/cashier/example',
            templateUrl: 'cashier/views/index.html'
        }).state('cashier circles example', {
            url: '/cashier/example/:circle',
            templateUrl: 'cashier/views/example.html'
        });
    }

    angular
        .module('mean.cashier')
        .config(Cashier);

    Cashier.$inject = ['$stateProvider'];

})();
