(function() {
    'use strict';

    function Sales($http, $q) {
        return {
            name: 'sales',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/sales/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.sales')
        .factory('Sales', Sales);

    Sales.$inject = ['$http', '$q'];

})();
