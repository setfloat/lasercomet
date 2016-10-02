'use strict';

const axios = require('axios');
const apiKey = process.env.API_KEY;

const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router();
// const validations = require('../validations/clusters');






router.get('/clusters', (req, res, next) => {

  // knex('clusters')
  //   .orderby('id')
  //   .innerJoin('photos')
  //
  //   .then((rows))

  // determine what I am defining to come in with the request
  // appropriately assign them using destructuring with req.body
  // restructure them with a new variable.
  // decamelize that variable to set new row for entry.
  // check if cluster exists
  // if it exists, determine the number of photos in that cluster already
  //

  let returnedRows = [];
  let loopLength;
  let againArr = [];
  let pixelArr = [];
  let spinArr = [];
  let reassignSpin;

  knex('clusters')
    .select('*')
    .then((res) => {
      return Promise.all(res.map((obj, index) => {
          return knex('photos')
            .select()
            .first()
            .where('cluster_id', obj.id)
            .then((resp) => {
              if(resp !== undefined) {
                pixelArr.push(resp.pixid)
                spinArr.push(resp);
                reassignSpin = spinArr;

                // logging any of the three above lines here shows correct data
              }

              return;
            })
      }))
    })
    .then((tresp) => {
      // console.log(reassignSpin);
      // console.log(pixelArr);

      return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${pixelArr
        .join(',')}&image_type=photo`)
        .then((axiosResult) => {
          searchResponse = axiosResult.data.hits
          const newResults = {};

          searchResponse = searchResponse.map((obj) => {
            let rObj = obj;

            rObj.comments = '';
            rObj.pixid = rObj.id;
            rObj.saved = false;
            rObj.clicked = false;
            // rObj.cluster_id = userClusterId;

            delete rObj.id;
            delete rObj.downloads;
            delete rObj.favorites;
            delete rObj.likes;
            delete rObj.type;
            delete rObj.user;
            delete rObj.userImageURL;
            delete rObj.user_id;
            delete rObj.views;

            rObj.cluster_id = spinArr.reduce((elem) => {
              if (elem !== undefined && elem.pixid === rObj.pixid) {
                  return spinArr.cluster_id;
                }
            });
    // console.log(rObj);
            return rObj;
          })
          // console.log(spinArr);
          // console.log(searchResponse);
          // console.log(searchResponse);
          res.send(searchResponse);
        })
        .catch((err) => {
          console.log(err);
        })



    })
    .catch((err) => {
      console.log(err);
    });
      // console.log(againArr);
            // console.log(spinArr);
    // .then((res) => {
    //   console.log(pixelArr);
    // })


    // console.log(spinArr);


  // for (let i = 1; i < 20; i++) {
  //   knex('photos')
  //     .select()
  //     .first()
  //     .where('cluster_id', i)
  //     .then((result) => {
  //       if (result !== undefined) {
  //       returnedRows.push(result);
  //       pixelArr.push(result.pixid); }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // console.log(pixelArr);
  let searchResponse;


  //   .select('clusters.id', 'photos.pixid')
  //   // .innerJoin('photos')
  //   .from('photos', 'clusters')
  //   // .where('clusters.id', 'photos.cluster_id')
  //   // .orderBy('clusters.id')
  //
  //
  // knex('photos')
  //   .select('cluster_id', 'pixid')
  //   .from()
  //   .orderBy('cluster_id')
  //   // .first()
  //   .then((rows) => {
  //     console.log(rows);
  //     let returnPhotos = [];
  //
  //     if ()
  //
  //     rows.map((row) => returnPhotos.push(row.pixid))
  //
  //     return axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${rows
  //       .join(',')}&image_type=photo`)
  // })
  // .then((axiosResult) => {
  //   searchResponse = axiosResult.data.hits
  //   const newResults = {};
  //
  //   searchResponse = searchResponse.map((obj) => {
  //     let rObj = obj;
  //
  //
  //
  //     rObj.comments = '';
  //     rObj.pixid = rObj.id;
  //     rObj.saved = false;
  //     rObj.clicked = false;
  //     rObj.cluster = userClusterId;
  //
  //     delete rObj.id;
  //     delete rObj.downloads;
  //     delete rObj.favorites;
  //     delete rObj.likes;
  //     delete rObj.type;
  //     delete rObj.user;
  //     delete rObj.userImageURL;
  //     delete rObj.user_id;
  //     delete rObj.views;
  //
  //     rObj.cluster_id = rows.reduce((elem) => {
  //       if (elem.pixid === rObj.pixid) {
  //         return rows.cluster_id;
  //       }
  //     });
  //
  //     return res.send(rObj);
  //   })
  // })
});


module.exports = router;
  //
  //
  // knex('photos')
  // .orderby()
