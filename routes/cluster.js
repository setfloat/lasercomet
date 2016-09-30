'use strict';

const axios = require('axios');
const apiKey = process.env.API_KEY;

const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
// const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router();

// router.post to the cluster should create a new photo in the cluster.
// what to send to the cluster:
// email.


// clicking "cluster" in the navBar should trigger this route.
router.get('/cluster', (req, res, next) => {

  jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET, (err, decoded) => {

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

      return knex('photos')
        .select()
        .where('cluster_id', cluster.id)
    })
    .then((photos) => {
      let pixels = [];

      photos.map((photo) => pixels.push(photo.pixid))

      return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${pixels
        .join(',')}&image_type=photo`)
    })
    .then((axiosResult) => {
      res.send(axiosResult.data)
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
  });
  // what is sent to client (what does the client want)
  // client wants their list of photos. specifically, webformaturl for each
  // photo in their cluster
});


router.post('/cluster', (req, res, next) => {
  let { email, pixid } = req.body;
  let newPhotoInsert;
  let storytime = {};

  jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET, (err, decoded) => {
    storytime.user_id = decoded.userId;
    knex('clusters')
      .first()
      .where('user_id', decoded.userId)
      .then((cluster) => {
        let promise;

        if (!cluster) {

          // knex statement to create it cluster
          promise = knex('clusters').insert(storytime, '*');
        }
        else {
          promise = Promise.resolve(cluster);
        }

        return promise;
      })
      .then((cluster) => {
        const row = decamelizeKeys(req.body);

        newPhotoInsert = req.body;
        newPhotoInsert.cluster_id = cluster.id;

        //camelizing hack
        newPhotoInsert.pageurl = newPhotoInsert.pageURL
        newPhotoInsert.previewurl = newPhotoInsert.previewURL
        newPhotoInsert.webformaturl = newPhotoInsert.webformatURL

        delete newPhotoInsert.clicked;
        delete newPhotoInsert.pageURL
        delete newPhotoInsert.previewURL
        delete newPhotoInsert.webformatURL

        newPhotoInsert = decamelizeKeys(newPhotoInsert)

        return knex('photos')
          .insert(newPhotoInsert, '*');
      })
      .then((photos) => {
        console.log('Are you here?');
        // next line might not be what we want to send back
        const photo = camelizeKeys(photos[0]);

            // delete anything you don't want to send back
        res.send(photo);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });
});

module.exports = router;
