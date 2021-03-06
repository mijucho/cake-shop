exports.up = function(knex, Promise) {
    return knex.schema.createTable('buyers', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('email')
        table.string('address')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('buyers')
  };