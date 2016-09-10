'use strict';

if (process.env.NODE_ENV !== 'productioin') {
  require('dotenv').config({ silent: true });
}

const express = require('express');
const app = express();

app.disable('x-powered-by');

const morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', (req, res, next) => {
  if (/json/.test(req.get('Accept'))) {
    return next();
  }

  res.sendStatus(406);
});

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());

const photos = require('./routes/photos');
const users = require('./routes/users');

app.use('/api', photos);
app.use('/api', users);

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
