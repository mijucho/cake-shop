exports.up = (knex, Promise) => {
    return knex.schema.createTable('shop', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('img_url')
      table.string('description')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('shop')
  }