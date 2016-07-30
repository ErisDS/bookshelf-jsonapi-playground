// Require and configure the top-level module, eventually this should live on npm
var JSONAPI = require('ghost-bookshelf-jsonapi');
var jsonapi = new JSONAPI('http://localhost:2375/api/v2');
var models = require('../../models');

var Post = jsonapi.registerResource(models.Post, {
    baseRoute: '/posts'
});

Post.registerOperation('read', {
    modelMethod: 'read',
    httpMethod: 'get',
    route: '/:id(\\d+)',
    allowedParams: ['id', 'slug'],
    allowedOptions: ['fields', 'include'],
});

module.exports = jsonapi;