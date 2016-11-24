(function() {
    'use strict';

    /* jshint -W098 */

    function CashierController($scope, Global, Cashier, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'cashier'
        };

        $scope.checkCircle = function() {
            Cashier.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.cashier')
        .controller('CashierController', CashierController);

    CashierController.$inject = ['$scope', 'Global', 'Cashier', '$stateParams'];

})();
