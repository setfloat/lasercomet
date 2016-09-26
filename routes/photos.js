'use strict';

const apiKey = process.env.API_KEY;
const axios = require('axios');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
// const knex = require('../knex');
const validations = require('../validations/photos');

// eslint-disable-next-line new-cap
const router = express.Router();
let searchResponse;

router.post('/photos',
  //  ev(validations.get),
  (req, res, next) => {
  console.log(req.body);
  // console.log(req);
  let searchQuery = req.body.searchQuery;
  searchQuery = searchQuery.trim().split(' ');
  searchQuery = searchQuery.join('+');
  console.log('this is the ' + searchQuery)

  axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`)
    .then((result) => {
      // console.log(res);
      // console.log(res.data);
      searchResponse = result.data.hits
      const newResults = {};

      searchResponse = searchResponse.map((obj) => {
        let rObj = obj;

        rObj.comments = '';
        rObj.pixid = rObj.id;
        rObj.saved = false;
        rObj.clicked = false;

        delete rObj.id;
        delete rObj.downloads;
        delete rObj.favorites;
        delete rObj.likes;
        delete rObj.type;
        delete rObj.user;
        delete rObj.userImageURL;
        delete rObj.user_id;
        delete rObj.views;


        return rObj;
      })

      console.log( '*** *** *** **** *** ', searchResponse);

      // for (prop in searchResponse) {
      //   console.log('stephenopolougs', prop);
      //   newResults.prop = prop.replace(/"/g,"");
      // }

      // searchResponse.comments = '';
      // searchResponse.pixid = searchResponse.id;

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

      // delete searchResponse.id;
      // delete searchResponse.downloads;
      // delete searchResponse.favorites;
      // delete searchResponse.likes;
      // delete searchResponse.type;
      // delete searchResponse.user;
      // delete searchResponse.userImageURL;
      // delete searchResponse.user_id;
      // delete searchResponse.views;

// will need to make the value of - saved - a variable,
// that variable will execute a function that checks if the user has saved
// that specific photo. will return true, false, undefined
      const deliveredSearchResponse = searchResponse.map(element => {
        return Object.assign({}, element, { saved: false, expanded: false })
      });
      console.log(`${searchResponse}`);
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
