/**
 * Test a method call API operation
 *
 */

// Test requirements
var expect = require('chai').expect;
var sinon  = require('sinon');
var testUtils = require('../../utils');
var sandbox = sinon.sandbox.create();

// What we're testing
var post = require('../../../../lib/fakeapi/resources/posts/method');
var internal = require('../../../../lib/fakeapi/resources/posts/internal');

describe('Post Method Read', function () {
    var modelStubs, internalSpy;

    beforeEach(function () {
        modelStubs = testUtils.stubPostModel(sandbox);
        internalSpy = sandbox.spy(internal, 'read');
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should accept a set of basic params & return bookshelf JSON', function (done) {
        post.read({id: 4}, {user: {id: 1}}).then(function (result) {
            expect(result).to.exist;
            expect(result.title).to.equal('fakePost');

            // Check the internal layer got called as we would expect
            expect(internalSpy.calledOnce).to.be.true;

            var apiReq = internalSpy.firstCall.args[0];
            var apiRes = internalSpy.firstCall.args[1];
            // Params and source are converted correctly
            expect(apiReq.params.id).to.eql(4);
            expect(apiReq.source).to.eql({user: {id: 1}});

            // Check the model layer got called as we would expect
            expect(modelStubs.read.calledOnce).to.be.true;
            expect(modelStubs.read.calledWith({id: 4})).to.be.true;

            done();
        });
    });
});