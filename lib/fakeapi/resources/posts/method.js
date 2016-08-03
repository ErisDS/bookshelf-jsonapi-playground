/**
 * Method Call wrapper for post read operation
 *
 * Converts a simple incoming request
 */

var debug = require('ghost-ignition').debug('api:resources:posts:method');
var Promise = require('bluebird');
var internal = require('./internal');
var utils = require('../../utils');

function convertMethodToAPI(params, source, options) {
    var APIRequest = utils.APIRequest(params, source);
    var APIResponse = utils.APIResponse(APIRequest);

    return [APIRequest, APIResponse];
}

function convertAPIResultToMethodResult(apiRes) {
    return apiRes.resultModel.toJSON();
}

module.exports = {
    // TODO: method call arguments need some thought
    read: function (params, source, options) {
        debug('Reading post', params.id);

        var args = convertMethodToAPI(params, source, options);

        return new Promise(function (resolve) {
            var callback = function (apiReq, apiRes) {
                debug('Method callback');
                var result = convertAPIResultToMethodResult(apiRes);
                return resolve(result);
            };

             args.push(callback);

            internal.read.apply(this, args);
        });
    }
};
