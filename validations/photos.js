'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    searchQuery: Joi.string()
      .label('Search entry')
      .max(50)
      .min(1)
      .required()
      .trim()
  }
};
