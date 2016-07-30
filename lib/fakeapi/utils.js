var debug = require('../vendor/debug')('api:utils');

function handleQueue(queue, apiReq, apiRes, cb) {
    debug('handleQueue');
    var idx = 0;
    apiNext();

    function apiNext() {
        debug('handleQueue calling next');
        var nextFunc = queue[idx];
        idx += 1;

        if (!nextFunc) {
            debug('handleQueue calling original next');
            return cb(apiReq, apiRes);
        }

        return nextFunc(apiReq, apiRes, apiNext);
    }
}

function APIRequest(params, source) {
    return {
        resource: '',
        operation: '',
        httpMethod: '',
        modelMethod: '',
        route: '',
        source: source,
        params: params
    };
}

function APIResponse(request) {
    return {
        request: request,
        query: {},
        resultModel: {}
    };
}

module.exports.handleQueue = handleQueue;
module.exports.APIRequest = APIRequest;
module.exports.APIResponse = APIResponse;
