var config = require('ghost-ignition').config,
    knex = require('knex'),
    dbConfig = config.get('db'),
    knexInstance;


if (!knexInstance && dbConfig) {
    knexInstance = knex(dbConfig);
}

module.exports = knexInstance;