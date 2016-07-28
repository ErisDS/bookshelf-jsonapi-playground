var Base = require('./base');

var Post = Base.Model.extend({
    tableName: 'posts'
});

module.exports = Base.model('Post', Post);
