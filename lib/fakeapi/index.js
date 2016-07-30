var _ = require('lodash');
var debug = require('../vendor/debug')('api');
var params = require('./middleware/params');
var formatter = require('./middleware/formatter');
var resources = require('./resources');


// This is weird and needs to go away
var router = require('./router');

// Exports the api methods directly so we can call api.posts.read
_.each(resources, function (resource, name) {
    module.exports[name] = resource.method;
});

// Exports a express middleware stack for use();
module.exports.stack = [
    params,
    router,
    formatter
];
