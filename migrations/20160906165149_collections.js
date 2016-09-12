'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('clusters', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clusters');
};

// increments
// name
// user_id
// timestamps
