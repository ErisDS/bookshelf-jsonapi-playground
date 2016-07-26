var fs = require('fs'),
    moment = require('moment');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

module.exports = function create() {
    return [
        {
            id: 1,
            uuid: 'abcd-1234',
            title: 'Grass All',
            body: require('./1.html'),
            created_at: moment('2016-06-19 20:00').utc().format(),
            updated_at: null
        },
        {
            id: 2,
            uuid: 'dcba-4321',
            title: 'Open Sesame',
            body: require('./2.html'),
            created_at: moment('2016-07-19 14:32').utc().format(),
            updated_at: null
        },
        {
            id: 3,
            uuid: 'cdef-3456',
            title: 'You\'re Signs',
            body: require('./3.html'),
            created_at: moment('2016-07-19 17:24').utc().format(),
            updated_at: null
        },
        {
            id: 4,
            uuid: 'efga-9876',
            title: 'Creature Made',
            body: require('./4.html'),
            created_at: moment('2016-07-20 09:40').utc().format(),
            updated_at: null
        },
        {
            id: 5,
            uuid: 'defg-1234',
            title: 'Said Above You\'re Day Isn\'t',
            body: require('./5.html'),
            created_at: moment('2016-07-20 12:52').utc().format(),
            updated_at: null
        },
        {
            id: 6,
            uuid: 'bcde-3456',
            title: 'Doesn\'t Fly',
            body: require('./6.html'),
            created_at: moment('2016-07-20 10:14').utc().format(),
            updated_at: null
        },
        {
            id: 7,
            uuid: 'efgh-5678',
            title: 'It Moving Upon Brought Kind',
            body: require('./7.html'),
            created_at: moment('2016-07-21 22:56').utc().format(),
            updated_at: null
        },
        {
            id: 8,
            uuid: 'efgh-8901',
            title: 'Their Man Moveth Upon In',
            body: require('./8.html'),
            created_at: moment('2016-07-21 21:23').utc().format(),
            updated_at: null
        },
        {
            id: 9,
            uuid: 'efgh-7890',
            title: 'Thing Moveth',
            body: require('./9.html'),
            created_at: moment('2016-07-22 23:42').utc().format(),
            updated_at: null
        },
        {
            id: 10,
            uuid: 'cdef-6789',
            title: 'Form beast',
            body: require('./10.html'),
            created_at: moment('2016-07-23 12:02').utc().format(),
            updated_at: null
        }
    ];
}
