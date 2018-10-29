angular.
module('core.eleves').
factory('Eleves', ['$resource',
    function($resource) {
        return $resource('api/eleves/:eleveId', {
            eleveId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);