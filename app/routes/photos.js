'use strict';

const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/photos')
const axios = require('axios');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/photos', ev(validations.get), (req, res, next) => {
  axios({
  method: 'get',
  url: '',
  data: {
    key: process.env.API_KEY,
    baseURL: 'https://pixabay.com/api/',
    category,
    webformatURL,

  }
});

  knex('photos')
  .orderBy('id')
  .then((rows) => {
    const photos = camelizeKeys(rows);

    res.send(photos);
  })
  .catch((err) => next(err));
});

module.exports = router;
