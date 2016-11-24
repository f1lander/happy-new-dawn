(function() {
    'use strict';

    function Business($http, $q) {
        return {
            name: 'business',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/business/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.business')
        .factory('Business', Business);

    Business.$inject = ['$http', '$q'];

})();
