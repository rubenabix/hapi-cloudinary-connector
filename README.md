# Hapi Cloudinary Connector [![Build Status](https://travis-ci.org/gergoerdosi/hapi-cloudinary-connector.svg)](https://travis-ci.org/gergoerdosi/hapi-cloudinary-connector)


Cloudinary connector plugin for the hapi framework.

## Installation

```
npm install hapi-cloudinary-connector
```

## Usage

The plugin accepts a configuration object. Available options can be found in the Cloudinary [documentation](http://cloudinary.com/documentation/node_additional_topics#configuration_options).

```
var Hapi = require('hapi');
var HapiCloudinaryConnector = require('hapi-cloudinary-connector');

var server = new Hapi.Server();

var plugin = {
    plugin: HapiCloudinaryConnector,
    options: {
        cloud_name: 'sample',
        api_key: '874837483274837',
        api_secret: 'a676b67565c6767a6767d6767f676fe1'
    }
};

server.pack.register(plugin, function (err) {

    ...
});
```
