'use strict';

const axios = require('axios');
const apiKey = process.env.API_KEY;

const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.post('/browseCluster', (req, res, next) => {
  console.log(req.body);
  console.log(req.body.rec.cluster_id);
  let browsedClusterId = req.body.rec.cluster_id;
  let transformArray = [];

  knex('photos')
    .select()
    .where('cluster_id', browsedClusterId)
    .then((photos) => {

      photos.map((photo) => transformArray.push(photo.pixid))

      return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${transformArray
        .join(',')}&image_type=photo`)
    })
    .then((axiosResult) => {
      let searchResponse = axiosResult.data.hits
      const newResults = {};

      searchResponse = searchResponse.map((obj) => {
        let rObj = obj;

        rObj.pixid = rObj.id;
        rObj.cluster_id = obj.cluster_id;

        delete rObj.comments;
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
      console.log(searchResponse);
      res.send(searchResponse)
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
});

module.exports = router;
