'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router();
// const validations = require('../validations/clusters');

router.post('/clusters', checkAuth, ev(validations.post), (req, res, next) => {
  // determine what I am defining to come in with the request
  // appropriately assign them using destructuring with req.body
  // restructure them with a new variable.
  // decamelize that variable to set new row for entry.
  // check if cluster exists
  // if it exists, determine the number of photos in that cluster already
  //

  knex('clusters')
    .orderby('id')
    .then((rows) => {
      console.log(rows);
    });
});


module.exports = router;


  knex('photos')
  .orderby()
