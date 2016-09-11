'use strict';

const express = require('express');
const router = express.Router();

router.post('/collections', (req, res, next) => {
  knex('collections')
    .orderby('id')
    .then((rows) => {
      console.log(rows);
    });
});


module.exports = router;
