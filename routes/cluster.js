'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');

// const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router();

// router.post to the cluster should create a new photo in the cluster.
// what to send to the cluster:
// email.
router.post('/cluster', (req, res, next) => {
  // console.log(res);
  let { email, pixid } = req.body;
  const newPhotoInsert = { pixid }; // unknown what is in this.

  // next line temporary hardcode until email sent from client
  const gmail = '1234@gmail.com'
  // knex('users')
  // .select('id')
  // .where('email', email)
  // .first()
  // .then(getClusterByUserId)
  // .then(findOrCreateCluster)
  // .then(insertPhotos)

  knex('users')
    .select('id')
    .where('email', gmail)
    .first()
    .then((accountid) => {
      console.log(accountid);
      console.log('you made it here buddy! !!!!!!!!!!!!!!!!!!!!!!!!');
      return knex('clusters')
        .first()
        .where('user_id', accountid);
    }).then((cluster) => {
      let promise;

      if (!cluster) {
        // knex statement to create it
        promise = knex('clusters').insert(accountid, '*').first();
      }
      else {
        promise = Promise.resolve(cluster);
      }

      return promise;
    })
    .then((cluster) => {
      // should req.body below actually be cluster from above?
      const row = decamelizeKeys(req.body);

      newPhotoInsert.cluster_id = row.cluster.id;

      return knex('photos')

        // newPhotoInsert needs the cluster.id added as cluster_id
        .insert(newPhotoInsert, '*');
    })
    .then((photos) => {
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

module.exports = router;
