/**
 * Unused!
 *
 * Collecting together all the details / setup we might need to make this work as a configuration
 * Rather than hardcoded endpoints
 */

var models = require('../../../../models');

var Post = new Resource('Post', {
    model: models.Post,
    // This could be generated and overridden
    aliases: ['Posts', 'post', 'posts'],

    // Could come from bookself schema, https://github.com/bogus34/bookshelf-schema#readme
    // Or our own schema generated from knex migrations?
    schema: {},

    baseRoute: '/posts/'
});

Post.registerOperation('read', {
    // Can default to operation name
    modelMethod: 'read',
    httpMethod: 'GET',
    route: '/(:id|:slug)/',
    allowedParams: ['id', 'slug'],
    allowedOptions: ['fields', 'include'],
    validate: function () {

    },
    // Do something extra before the model call
    beforeModelCall: function () {

    }
});
