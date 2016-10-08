'use strict';

const axios = require('axios');
const apiKey = process.env.API_KEY;

const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router();

// const validations = require('../validations/clusters');

router.get('/clusters', (req, res, next) => {
  const pixelArr = [];
  const spinArr = [];
  let searchResponse;

  knex('clusters')
    .select('*')
    .then((res) => {
      return Promise.all(res.map((obj, index) => {
        return knex('photos')
          .select()
          .first()
          .where('cluster_id', obj.id)
          .then((resp) => {
            if (resp !== undefined) {
              pixelArr.push(resp.pixid);
              spinArr.push(resp);
            }

            return;
          });
      }));
    })
    .then((tresp) => {

      return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${pixelArr
        .join(',')}&image_type=photo`)
        .then((axiosResult) => {
          searchResponse = axiosResult.data.hits;

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

            let res = spinArr.filter((elem) => {
              return (elem !== undefined && elem.pixid === rObj.pixid)
            });
            rObj.cluster_id = res[0].cluster_id
            return rObj;
        })
          res.send(searchResponse);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
