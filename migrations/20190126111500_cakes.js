exports.up = (knex, Promise) => {
    return knex.schema.createTable('cakes', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('img_url')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('cakes')
  }
  