/**
 * Method Call wrapper for post read operation
 *
 * Converts a simple incoming request
 */

var debug = require('../../../vendor/debug')('api:resources:posts:http');
var internal = require('./internal');
var utils = require('../../utils');

function convertHTTPToAPI(req, res) {
    var params = req.params;
    var source = req.source;
    var APIRequest = utils.APIRequest(params, source);
    var APIResponse = utils.APIResponse(APIRequest);

    return [APIRequest, APIResponse];
}

function convertAPIResultToHTTPResult(apiRes) {
    return {
        model: apiRes.resultModel,

        // TODO figure out where this should come from
        type: 'post'
    }
}

module.exports = {
    read: function (req, res, next) {
        debug('Reading post', req.params.id);

        var args = convertHTTPToAPI(req, res);
        var callback = function callback(apiReq, apiRes) {
            debug('HTTP callback');
            res.apiResult = convertAPIResultToHTTPResult(apiRes);

            return next();
        };

        args.push(callback);

        internal.read.apply(this, args);
    }
};
