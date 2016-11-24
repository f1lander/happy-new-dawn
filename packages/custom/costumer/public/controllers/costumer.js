(function() {
    'use strict';

    /* jshint -W098 */

    function CostumerController($scope, Global, Costumer, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'costumer'
        };

        $scope.checkCircle = function() {
            Costumer.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.costumer')
        .controller('CostumerController', CostumerController);

    CostumerController.$inject = ['$scope', 'Global', 'Costumer', '$stateParams'];

})();
