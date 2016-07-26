/**
 * Initial Set of DB Concepts to work with:
 * - standard resources
 * - 1:1 mapping (user, profile)
 * - 1:many mapping (client, client_trusted domains)
 * - many:many mapping (post, tags)
 * - key-value store (settings)
 * - polymorpic relation (URLs?, Permissions)
 * - meta/extends (post_fields)
 * Advanced:
 * - tag hierarchy (groups, parents?)
 * - tag on relationship post <-> author(s) with a "label"
 */

function createPostTable(table) {
    table.increments('id').primary();
    table.string('uuid', 36).unique().notNullable();
    table.string('title').notNullable();
    table.text('body').nullable();
    table.dateTime('created_at').notNullable();
    table.dateTime('updated_at').nullable();
}

exports.up = function(knex, Promise) {
    /*jshint unused:false*/
    return knex.schema
        .createTable('posts', createPostTable);
};

exports.down = function(knex, Promise) {
    /*jshint unused:false*/
    return knex.schema
        .dropTable('posts');
};
