const express = require('express')
const db = require('../db')
const router = express.Router()

    router.get('/', (req, res) => {
     res.render('home')
      })
    .catch(err => {
      res.status(500).send('error!')
    })

    router.get('/cakes', (req, res) => {
      return db.displayCakes()
      .then ((cakes) => {
        res.render('cakes',{cakes})
      })
      })

   router.get('/cake/:id', (req, res) => {
     var id = req.params.id
     return db.displayCake(id)
     .then ((result) => {
       res.render('cake', result[0])
     })
   })

   router.post('/cake/:id', (req,res) => {
     var id = req.params.id
     var cakeName = {
       name:req.body.name,
     }
  //  console.log(userData)
      return db.editName(id, cakeName)
      .then ((result) => {
        res.render('cake', result[0])
      })

   })

module.exports = router
