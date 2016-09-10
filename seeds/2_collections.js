'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('collections').del()
    .then(() => knex('collections').insert([
      {
        id: 1,
        user_id: 1,
        name: 'Planets',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 2,
        user_id: 1,
        name: 'Balloons',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 3,
        user_id: 4,
        name: 'Ships',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 4,
        user_id: 5,
        name: 'Robots',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 5,
        user_id: 3,
        name: 'Spaceships',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 6,
        user_id: 4,
        name: 'Comets',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 7,
        user_id: 3,
        name: 'Boats',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      }
    ])
  )
  .then(() => {
    return knex.raw(
      "SELECT setval('collections_id_seq', (SELECT MAX(id) FROM collections));"
    );
  });
};
