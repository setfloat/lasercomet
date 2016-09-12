'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router();
const validations = require('../validations/collections');

router.post('/collections', checkAuth, ev(validations.post), (req, res, next) => {
  // determine what I am defining to come in with the request
  // appropriately assign them using destructuring with req.body
  // restructure them with a new variable.
  // decamelize that variable to set new row for entry.
  // check if collection exists
  // if it exists, determine the number of photos in that collection already
  //

  knex('collections')
    .orderby('id')
    .then((rows) => {
      console.log(rows);
    });
});


module.exports = router;
