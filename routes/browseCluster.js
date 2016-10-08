'use strict';

const axios = require('axios');
const apiKey = process.env.API_KEY;
const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.post('/browseCluster', (req, res, next) => {
  const browsedClusterId = req.body.rec.cluster_id;
  const transformArray = [];

  knex('photos')
    .select()
    .where('cluster_id', browsedClusterId)
    .then((photos) => {
      photos.map((photo) => transformArray.push(photo.pixid));

      return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${transformArray
        .join(',')}&image_type=photo`);
    })
    .then((axiosResult) => {
      let searchResponse = axiosResult.data.hits;

      searchResponse = searchResponse.map((obj) => {
        const rObj = obj;

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
      });
      res.send(searchResponse);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
