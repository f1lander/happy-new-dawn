(function() {
    'use strict';

    function Costumer($http, $q) {
        return {
            name: 'costumer',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/costumer/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.costumer')
        .factory('Costumer', Costumer);

    Costumer.$inject = ['$http', '$q'];

})();
