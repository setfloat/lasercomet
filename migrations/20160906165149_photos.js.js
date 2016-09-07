'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.string('photo_url');
    table.string('category').notNullable();
  });
};
