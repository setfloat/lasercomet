'use strict';

const axios = require('axios');
const apiKey = process.env.API_KEY;

const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

// const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');

// eslint-disable-next-line new-cap
const router = express.Router();

// clicking "cluster" in the navBar should trigger this route.
router.get('/cluster', (req, res, next) => {
  jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET, (err, decoded) => {
    let searchResponse;
    let userClusterId;

    knex('users')
      .select('id')
      .where('id', decoded.userId)
      .first()
      .then((accountid) => {
        return knex('clusters')
          .select()
          .where('user_id', decoded.userId)
          .first();
      })
      .then((cluster) => {
        userClusterId = cluster.id;

        return knex('photos')
          .select()
          .where('cluster_id', cluster.id);
      })
      .then((photos) => {
        const pixels = [];

        photos.map((photo) => pixels.push(photo.pixid));

        return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${pixels
          .join(',')}&image_type=photo`);
      })
      .then((axiosResult) => {
        searchResponse = axiosResult.data.hits;
        const newResults = {};

        searchResponse = searchResponse.map((obj) => {
          const rObj = obj;

          rObj.comments = '';
          rObj.pixid = rObj.id;
          rObj.saved = false;
          rObj.clicked = false;
          rObj.cluster = userClusterId;

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

        // res.send(axiosResult.data)
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });
});

router.post('/cluster', (req, res, next) => {
  // const { email, pixid } = req.body;
  let newPhotoInsert;
  const storytime = {};

  jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET, (err, decoded) => {
    // eslint-disable-next-line camelcase
    storytime.user_id = decoded.userId;
    if (req.body.photo) {
      return knex('photos')
        .where('pixid', req.body.photo.pixid)
        .del()
        .then((resp) => {
          res.sendStatus(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    knex('clusters')
      .first()
      .where('user_id', decoded.userId)
      .then((cluster) => {
        let promise;

        // eslint-disable-next-line no-negated-position
        if (!cluster) {
          promise = knex('clusters').insert(storytime, '*');
        }
        else {
          promise = Promise.resolve(cluster);
        }

        return promise;
      })
      .then((cluster) => {
        newPhotoInsert = req.body;

        // eslint-disable-next-line camelcase;
        newPhotoInsert.cluster_id = cluster.id;
        newPhotoInsert.pageurl = newPhotoInsert.pageURL;
        newPhotoInsert.previewurl = newPhotoInsert.previewURL;
        newPhotoInsert.webformaturl = newPhotoInsert.webformatURL;

        delete newPhotoInsert.clicked;
        delete newPhotoInsert.pageURL;
        delete newPhotoInsert.previewURL;
        delete newPhotoInsert.webformatURL;

        newPhotoInsert = decamelizeKeys(newPhotoInsert);

        return knex('photos')
          .insert(newPhotoInsert, '*');
      })
      .then((photos) => {
        const photo = camelizeKeys(photos[0]);

        res.send(photo);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });
});

module.exports = router;
