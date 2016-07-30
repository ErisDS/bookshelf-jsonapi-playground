/**
 * Test an "internal" API operation
 *
 * This code will always be accessed either via HTTP or method call layers except in tests
 */
// Test requirements
var expect = require('chai').expect;
var sinon  = require('sinon');
var testUtils = require('../../utils');
var sandbox = sinon.sandbox.create();

// What we're testing
var post = require('../../../../lib/fakeapi/resources/posts/internal');

describe('Post Internal Read', function () {
    var APIRequest, APIResponse, modelStubs;

    beforeEach(function () {
        APIRequest = {
            resource: 'post',
            operation: 'read',
            httpMethod: 'GET',
            modelMethod: 'read',
            route: '/posts/:id/',
            source: {user: {id: 1}},
            params: {
                id: 4
            }
        };

        APIResponse = {
            request: APIRequest,
            query: {},
            resultModel: {}
        };

        modelStubs = testUtils.stubPostModel(sandbox);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should accept and callback with API RES/REQ', function (done) {
        post.read(APIRequest, APIResponse, function (apiReq, apiRes) {
            expect(apiReq).to.exist;
            expect(apiRes).to.exist;

            // Should return the same objects that were passed in (but modified)
            expect(apiReq).to.equal(APIRequest);
            expect(apiRes).to.equal(APIResponse);

            // Check the model layer got called as we would expect
            expect(modelStubs.read.calledOnce).to.be.true;

            done();
        });
    });
});