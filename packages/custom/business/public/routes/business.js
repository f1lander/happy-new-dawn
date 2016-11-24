(function() {
    'use strict';

    function Business($stateProvider) {
        $stateProvider.state('business example page', {
            url: '/business/example',
            templateUrl: 'business/views/index.html'
        }).state('business circles example', {
            url: '/business/example/:circle',
            templateUrl: 'business/views/example.html'
        }).state('costumers_report', {
            url: '/business/costumers_report',
						controller:'CostumersReportController',
            templateUrl: 'business/views/costumers_report.html'
        }).state('rewards_report', {
            url: '/business/rewards_report',
						controller:'RewardsReportController',
            templateUrl: 'business/views/rewards_report.html'
        });
    }

    angular
        .module('mean.business')
        .config(Business);

    Business.$inject = ['$stateProvider'];

})();
