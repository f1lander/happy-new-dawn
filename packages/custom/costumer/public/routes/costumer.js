(function() {
    'use strict';

    function Costumer($stateProvider) {
        $stateProvider.state('costumer example page', {
            url: '/costumer/example',
            templateUrl: 'costumer/views/index.html'
        }).state('costumer circles example', {
            url: '/costumer/example/:circle',
            templateUrl: 'costumer/views/example.html'
        });
    }

    angular
        .module('mean.costumer')
        .config(Costumer);

    Costumer.$inject = ['$stateProvider'];

})();
