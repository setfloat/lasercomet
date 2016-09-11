const Joi = require('joi');

module.exports.get = {
  body: {
    email: Joi.string()
      .email()
      .label('Email')
      .max(30)
      .min(6)
      .required()
      .trim(),
    password: Joi.string()
      .label('Password')
      .max(255)
      .min(8)
      .required()
      .trim(),
    username: Joi.string()
      .label('Username')
      .max(30)
      .min(6)
      .required()
      .trim()
  }
};
