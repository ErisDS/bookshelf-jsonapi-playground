var posts = require('./posts');

exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.map(posts.create(), function (post) {
          return knex('posts').insert(post);
      });
    });
};
