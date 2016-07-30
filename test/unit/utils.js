var Bluebird = require('bluebird');
require('sinon-as-promised')(Bluebird);

function stubPostModel(sandbox) {
    var PostModel = require('../../models').Post;
    var fakeModel = {
        toJSON: function () {
            return {title: 'fakePost'};
        }
    };
    var stubs = {
        read: sandbox.stub(PostModel, 'read').resolves(fakeModel),
        browse: sandbox.stub(PostModel, 'browse').resolves(fakeModel)
    };

    return stubs;
}

module.exports.stubPostModel = stubPostModel;