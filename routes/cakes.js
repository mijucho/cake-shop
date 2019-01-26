const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
    })
    // .catch(err => {
    //   res.status(500).send('Oh no, an error!')
    // })


module.exports = router
