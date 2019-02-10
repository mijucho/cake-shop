
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

 module.exports = {
  displayCakes,
  displayCake,
  // addBuyers,
  editName
 }

function displayCakes (db = connection) {
   return db('shop').select()
 }

 function displayCake (id, db = connection) {
  return db('shop')
  .where('id', id)
  .select()
}

// // function addBuyers (cakeName, db = connection) {
//   return db('shop')
//   .where('id', id)
//   .insert(cakeName)
// }
 function editName(id, key, db = connection) {
   return db('shop')
   .where('id', id)
   .update('name', key.name)
 }