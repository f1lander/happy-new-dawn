(function() {
    'use strict';

    /* jshint -W098 */

    function BusinessController($scope, Global, Business, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'business'
        };

        $scope.checkCircle = function() {
            Business.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.business')
        .controller('BusinessController', BusinessController);

    BusinessController.$inject = ['$scope', 'Global', 'Business', '$stateParams'];

})();
