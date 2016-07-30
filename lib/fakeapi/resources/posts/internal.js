/**
 * Setup an "internal" API operation
 *
 * This code will always be accessed either via HTTP or method call layers
 */
var debug = require('../../../vendor/debug')('api:resources:posts:internal');
var _ = require('lodash');
var handleQueue = require('../../utils').handleQueue;
var Post = require('../../../../models').Post;

function handleParams(apiReq, apiRes, apiNext) {
    debug('Calling handleParams');
    var allowedParams = ['id', 'slug'];
    apiRes.query = _.pick(apiReq.params, allowedParams);
    apiNext();
}

function executeModelCall(apiReq, apiRes, apiNext) {
    debug('Calling executeModelCall');
    return Post.read(apiRes.query).then(function (result) {
        apiRes.resultModel = result;
        apiNext();
    });
}

function formatResult(apiReq, apiRes, apiNext) {
    debug('Calling formatResult (does not do anything yet)');
    apiNext();
}

module.exports = {
    read: function (apiReq, apiRes, cb) {
        debug('Calling read');
        var readQueue = [
            handleParams,
            executeModelCall,
            formatResult
        ];

        handleQueue(readQueue, apiReq, apiRes, cb);
    }
};
