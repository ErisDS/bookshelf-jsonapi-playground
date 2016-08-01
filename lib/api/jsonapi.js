// Require and configure the top-level module
var bookshelfJSONAPI = require('ghost-bookshelf-jsonapi');
// Require the bookshelf models that do the hardwork
var models = require('../../models');

// Initialise a new API, with a base URL (required)
var jsonapi = bookshelfJSONAPI('http://localhost:2375/api/v2');

// Add a new resource to the API
// This takes the model it is related to, and an options object
var Posts = jsonapi.resource(models.Post, {
    // Base route for this resource
    baseRoute: '/posts'
});

// Add a new operation to the Post Resource
Posts.operation('read', {
    // Method to call on the model that belongs to the resource
    modelMethod: 'read',
    // What HTTP verb to use for this operation
    httpMethod: 'get',
    // Result type, to pass to the jsonapi formatter
    resultType: 'post',
    // Route for this operation, is appended to the resource baseRoute
    route: '/:id(\\d+)',
    // Allowed params, is used to ensure we only pass data this to operation that is permitted
    allowedParams: ['id']
});

// Export the API
module.exports = jsonapi;