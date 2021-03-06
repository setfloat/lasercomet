'use strict';

const apiKey = process.env.API_KEY;
const axios = require('axios');
const express = require('express');

const ev = require('express-validation');
const validations = require('../validations/photos');

// eslint-disable-next-line new-cap
const router = express.Router();
let searchResponse;

router.post('/photos', ev(validations.post), (req, res, next) => {
  let searchQuery = req.body.searchQuery;

  searchQuery = searchQuery.trim().split(' ');
  searchQuery = searchQuery.join('+');

  axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`)
    .then((result) => {
      searchResponse = result.data.hits;
      searchResponse = searchResponse.map((obj) => {
        const rObj = obj;

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
      });

      res.send(searchResponse);
    })
    .catch((err) => next(err));
});

module.exports = router;
