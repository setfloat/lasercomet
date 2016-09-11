const Joi = require('joi');

module.exports.get = {
  body: {
    searchQuery: Joi.string()
      .label('Search entry')
      .max(50)
      .min(1)
      .required()
      .trim()
  }
};
