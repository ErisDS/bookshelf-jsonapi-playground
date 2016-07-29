var Mapper = require('jsonapi-mapper'),
    config,
    mapper;

// TODO: find a home for this config / a way to pass it in
config = {
    "url": "http://localhost:2375/api/v1"
};

mapper = new Mapper.Bookshelf(config.url);

module.exports = function (data, type) {
    return mapper.map(data, type);
};