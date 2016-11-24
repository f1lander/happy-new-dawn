(function() {
    'use strict';

    /* jshint -W098 */

    function SalesController($scope, Global, Sales, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'sales'
        };

        $scope.checkCircle = function() {
            Sales.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.sales')
        .controller('SalesController', SalesController);

    SalesController.$inject = ['$scope', 'Global', 'Sales', '$stateParams'];

})();
