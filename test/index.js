'use strict';

// Load external modules
var Cloudinary = require('cloudinary');
var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');

// Load internal modules
var HapiCloudinaryConnector = require('../lib');

// Test shortcuts
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Connector', function () {

    it('configures cloudinary', function (done) {

        var server = new Hapi.Server();

        /* eslint-disable */
        var plugin = {
            plugin: HapiCloudinaryConnector,
            options: {
                cloud_name: 'sample',
                api_key: '874837483274837',
                api_secret: 'a676b67565c6767a6767d6767f676fe1'
            }
        };
        /* eslint-enable */

        server.pack.register(plugin, function (err) {

            expect(Cloudinary.config('api_key')).to.equal('874837483274837');
            done();
        });
    });

    it('throws an error when configuration is invalid', function (done) {

        var server = new Hapi.Server();

        /* eslint-disable */
        var plugin = {
            plugin: HapiCloudinaryConnector,
            options: {
                cloud_name: 'sample'
            }
        };
        /* eslint-enable */

        server.pack.register(plugin, function (err) {

            expect(err).to.exist();
            expect(err.message).to.equal('api_key is required');
            done();
        });
    });
});
