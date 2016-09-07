'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lasercomet_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/lasercomet_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

