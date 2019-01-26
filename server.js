const express = require('express')
const hbs = require('express-handlebars')

const cakesRoutes = require('./routes/cakes')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))
server.use(express.static('public'))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', cakesRoutes)

module.exports = server
