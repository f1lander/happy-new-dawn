(function() {
    'use strict';

    /* jshint -W098 */

    function RewardsReportController($scope, Global) {
        $scope.global = Global;
        $scope.package = {
            name: 'business'
        };

				$scope.title = 'Reporte de premios';

        $scope.rewards = [{rank:1, name: 'Paquetote', points: 12600},
                          {rank:2, name: 'Paquetin', points: 5300},
                          {rank:3, name: 'Refresco', points: 1200},
                          {rank:4, name: 'Palomitas', points: 540}
                         ];
    }

    angular
        .module('mean.business')
        .controller('RewardsReportController', RewardsReportController);

    RewardsReportController.$inject = ['$scope', 'Global'];

})();
