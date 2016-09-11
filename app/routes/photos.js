'use strict';

const apiKey = process.env.API_KEY;
const axios = require('axios');
const { camelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/photos')

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/photos', ev(validations.get), (req, res, next) => {
  const searchQuery = req.body.searchQuery;

  searchQuery = searchQuery.trim().split(' ');
  searchQuery = searchQuery.join('+');

  axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`)
    .then((res) => {

      // eslint-disable-next-line no-console
      console.log(res);

    })
    .catch((err) => next(err));
});

  //
  // data: {
  //   key: process.env.API_KEY,
  //   baseURL: 'https://pixabay.com/api/',
  //   category,
  //   webformatURL
  // }

//   knex('photos')
//   .orderBy('id')
//   .then((rows) => {
//     const photos = camelizeKeys(rows);
//
//     res.send(photos);
//   })
//   .catch((err) => next(err));
// });

module.exports = router;
