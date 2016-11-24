(function() {
    'use strict';

    function Cashier($http, $q) {
        return {
            name: 'cashier',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/cashier/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.cashier')
        .factory('Cashier', Cashier);

    Cashier.$inject = ['$http', '$q'];

})();
