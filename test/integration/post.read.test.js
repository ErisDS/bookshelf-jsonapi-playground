// Test requirements
var request = require('supertest');
var expect = require('chai').expect;

// What we're testing
var app = require('../../app'),
    apiBaseRoute = '/api/v1';

describe('Post Integrated Read', function () {

    it('Can read a post by ID', function (done) {
        request(app)
            .get(apiBaseRoute + '/posts/3')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect('Content-Length', /\d+/)
            .end(function (error, result) {
                if (error) {
                    return done(error);
                }

                expect(result.body).to.have.keys('links', 'data');
                expect(result.body.links).to.have.keys('self');

                // TODO figure out why result.body.links.self != a link to this object but to the global posts route
                expect(result.body.data.links.self).to.have.string(apiBaseRoute + '/posts/3');

                done();
            });
    });

    // We don't yet apply the queryParams to the query posts/3/?fields[post]=title
    it.skip('Can read a post by ID with sparse fieldsets', function (done) {
        request(app)
            .get(apiBaseRoute + '/posts/3?fields[post]=id,title')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect('Content-Length', /\d+/)
            .end(function (error, result) {
                if (error) {
                    return done(error);
                }

                expect(result.body).to.have.keys('links', 'data');
                expect(result.body.links).to.have.keys('self');

                // TODO figure out why result.body.links.self != a link to this object but to the global posts route
                expect(result.body.data.links.self).to.have.string(apiBaseRoute + '/posts/3');

                expect(result.body.data.attributes).to.have.keys('id', 'title');
                expect(result.body.data.attributes).to.not.have.keys('uuid', 'body');

                done();
            });
    });

    // posts/3/?include=tags
    it('Can read a post by ID & include a related object');
});


