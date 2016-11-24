(function() {
    'use strict';

    /* jshint -W098 */

    function CostumersReportController($scope, Global) {
        $scope.global = Global;
        $scope.package = {
            name: 'business'
        };

				$scope.title = 'Costumers Report T';
    }

    angular
        .module('mean.business')
        .controller('CostumersReportController', CostumersReportController);

    CostumersReportController.$inject = ['$scope', 'Global'];

})();
