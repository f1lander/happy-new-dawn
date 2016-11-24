(function() {
    'use strict';

    /* jshint -W098 */

    function RewardsReportController($scope, Global) {
        $scope.global = Global;
        $scope.package = {
            name: 'business'
        };

				$scope.title = 'Rewards Report T';
    }

    angular
        .module('mean.business')
        .controller('RewardsReportController', RewardsReportController);

    RewardsReportController.$inject = ['$scope', 'Global'];

})();
