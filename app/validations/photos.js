const Joi = require('joi');

module.exports.get = {
  body: {
    searchQuery: Joi.string()
      .label('Search entry')
      .required()
      .max(50)
      .min(1)
      .trim()
  }
};
