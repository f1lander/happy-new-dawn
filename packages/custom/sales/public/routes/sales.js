(function() {
    'use strict';

    function Sales($stateProvider) {
        $stateProvider.state('sales example page', {
            url: '/sales/example',
            templateUrl: 'sales/views/index.html'
        }).state('sales circles example', {
            url: '/sales/example/:circle',
            templateUrl: 'sales/views/example.html'
        });
    }

    angular
        .module('mean.sales')
        .config(Sales);

    Sales.$inject = ['$stateProvider'];

})();
