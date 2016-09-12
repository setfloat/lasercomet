'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.integer('cluster_id')
      .notNullable()
      .references('id')
      .inTable('clusters')
      .onDelete('CASCADE')
      .index();
    table.string('comments')
      .notNullable()
      .defaultTo('');
    table.integer('pixid')
      .notNullable();
    table.integer('image_height');
    table.integer('image_width');
    table.string('pageurl')
      .notNullable()
      .defaultTo('');
    table.integer('preview_height');
    table.string('previewurl')
      .notNullable()
      .defaultTo('');
    table.integer('preview_width');
    table.string('tags')
      .defaultTo('');
    table.integer('webformat_height');
    table.string('webformaturl')
      .notNullable()
      .defaultTo('');
    table.integer('webformat_width');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('photos');
};
