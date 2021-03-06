'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/users');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/users', ev(validations.post), (req, res, next) => {
  const {
    // username,
    email,
    password
  } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Email in use');
      }

      return bcrypt.hash(password, 12);
    })
  .then((hashedPassword) => {
    const newUser = {
      // username,
      email,
      hashedPassword
    };

    const row = decamelizeKeys(newUser);

    return knex('users').insert(row, '*');
  })
  .then((rows) => {
    const user = camelizeKeys(rows[0]);

    delete user.hashedPassword;

    res.send(user);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
