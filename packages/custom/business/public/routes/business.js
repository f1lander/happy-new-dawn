(function() {
    'use strict';

    function Business($stateProvider) {
        $stateProvider.state('business example page', {
            url: '/business/example',
            templateUrl: 'business/views/index.html'
        }).state('business circles example', {
            url: '/business/example/:circle',
            templateUrl: 'business/views/example.html'
        });
    }

    angular
        .module('mean.business')
        .config(Business);

    Business.$inject = ['$stateProvider'];

})();
