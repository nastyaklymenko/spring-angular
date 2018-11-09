angular.module('crudApp').factory('Employee', Employee);

Employee.$inject = ['angularUtils.directives.dirPagination', '$resource'];

function Employee($resource) {
    var resourceUrl = 'api/employee/:id';

    return $resource(resourceUrl, {}, {
        'update': {
            method: 'PUT'
        }
    });
}