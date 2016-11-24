(function() {
    'use strict';

    /* jshint -W098 */

    function CostumersReportController($scope, Global) {
        $scope.global = Global;
        $scope.package = {
            name: 'business'
        };

				$scope.title = 'Costumers Report T';
        $scope.costumers = [{rank:1, points: 1500, name: 'Juan', email: 'juan@gmail.com'},
                            {rank:2, points: 1200, name: 'Ana', email: 'ana@gmail.com'},
                            {rank:3, points: 900, name: 'Pedro', email: 'pedro@gmail.com'}
                           ];

    }

    angular
        .module('mean.business')
        .controller('CostumersReportController', CostumersReportController);

    CostumersReportController.$inject = ['$scope', 'Global'];

})();
