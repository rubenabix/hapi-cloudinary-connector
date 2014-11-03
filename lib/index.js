'use strict';

// Load external modules
var Cloudinary = require('cloudinary');
var Joi = require('joi');

// Declare internals
var internals = {};

/* eslint-disable */
internals.schema = Joi.object({
    cloud_name: Joi.string().required(),
    api_key: Joi.string().required(),
    api_secret: Joi.string().required(),
    cdn_subdomain: Joi.boolean(),
    private_cdn: Joi.boolean(),
    secure_distribution: Joi.string(),
    cname: Joi.string(),
    static_image_support: Joi.boolean(),
    enhance_image_tag: Joi.boolean(),
    secure: Joi.boolean()
});
/* eslint-enable */


exports.register = function (plugin, options, next) {

    var result = Joi.validate(options, internals.schema);

    if (result.error) {
        return next(result.error);
    }

	Cloudinary.config(options);
    next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};
