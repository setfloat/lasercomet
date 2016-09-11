'use strict';

const apiKey = process.env.API_KEY;
const axios = require('axios');
const { camelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
// const knex = require('../knex');
const validations = require('../validations/photos')

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/photos', ev(validations.get), (req, res, next) => {
  let searchQuery = req.body.searchQuery;

  searchQuery = searchQuery.trim().split(' ');
  searchQuery = searchQuery.join('+');

  axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`)
    .then((res) => {

      const searchResponse = res.body.hits[0]
      const newResults = {};


      for (prop in searchResponse) {
        newResults.prop = prop.replace(/"/g,"");
      }

      searchResponse.comments = '';
      searchResponse.pixid = searchResponse.id;

      // delete {
      //   id,
      //   downloads,
      //   favorites,
      //   likes,
      //   type,
      //   user,
      //   userImageURL,
      //   user_id,
      //   views
      // } = searchResponse;

      delete searchResponse.id;
      delete searchResponse.downloads;
      delete searchResponse.favorites;
      delete searchResponse.likes;
      delete searchResponse.type;
      delete searchResponse.user;
      delete searchResponse.userImageURL;
      delete searchResponse.user_id;
      delete searchResponse.views;

      res.send(searchResponse);
    })
    .catch((err) => next(err));
});

  // data: {
  //   key: process.env.API_KEY,
  //   baseURL: 'https://pixabay.com/api/',
  //   category,
  //   webformatURL
  // }

module.exports = router;
