var debug = require('../../debug')('api:controllers:posts');

// This is the controller level, where req & res should come from API
var PostModel = require('../../../models').Post;

var browse = function browse(options) {
    debug('Browse called');
    return PostModel.browse(options);
}

var read = function read(data, options) {
    debug('Read called');
    return PostModel.read(data, options);
};

module.exports = {
    resource: 'posts',
    browse: browse,
    read: read
};