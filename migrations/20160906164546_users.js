'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').unique();
    table.string('email').unique();
    table.specificType('hashed_password', 'char(60)');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
