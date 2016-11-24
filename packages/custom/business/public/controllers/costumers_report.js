(function() {
    'use strict';

    /* jshint -W098 */

    function CostumersReportController($scope, Global) {
        $scope.global = Global;
        $scope.package = {
            name: 'business'
        };

				$scope.title = 'Reporte de clientes';

        $scope.costumers = [{rank:1, points: 3500, name: 'Juan', email: 'juan@gmail.com'},
                            {rank:2, points: 2100, name: 'Jesus', email: 'jesus@gmail.com'},
                            {rank:3, points: 1800, name: 'Maria', email: 'maria@gmail.com'},
                            {rank:4, points: 1200, name: 'Eva', email: 'eva@gmail.com'},
                            {rank:5, points: 1100, name: 'Lucas', email: 'lucas@gmail.com'},
                            {rank:6, points: 900, name: 'Mateo', email: 'mateo@gmail.com'},
                            {rank:7, points: 800, name: 'Pablo', email: 'pablo@gmail.com'}
                           ];

    }

    angular
        .module('mean.business')
        .controller('CostumersReportController', CostumersReportController);

    CostumersReportController.$inject = ['$scope', 'Global'];

})();
