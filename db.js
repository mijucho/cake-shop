
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

 module.exports = {
  displayCakes,
  displayCake
 }

function displayCakes (db = connection) {
   return db('shop').select()
 }

 function displayCake (id, db = connection) {
  return db('shop')
  .where('id', id)
  .select()
}
