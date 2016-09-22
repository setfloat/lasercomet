'use strict';

const apiKey = process.env.API_KEY;
const axios = require('axios');
const { camelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
// const knex = require('../knex');
const validations = require('../validations/photos');

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/photos', ev(validations.get), (req, res, next) => {
  console.log('something happened');
  let searchQuery = req.body.searchQuery;

  searchQuery = searchQuery.trim().split(' ');
  searchQuery = searchQuery.join('+');

  axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`)
    .then((res) => {

      let searchResponse = res.body.hits[0]
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

// will need to make the value of - saved - a variable,
// that variable will execute a function that checks if the user has saved
// that specific photo. will return true, false, undefined
      const deliveredSearchResponse = searchResponse.map(element => {
        return Object.assign({}, element, { saved: false, expanded: false })
      });

      res.send(deliveredSearchResponse);
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
