const express = require('express')
const mongoose = require('mongoose') // Nos va a permitir interactuar con la db de una forma más sencilla
const routes = require('./routes')
const bodyParser = require('body-parser')

const server = express() // Crear el servidor

// conectar a mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Habilitar el body-parser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

// Habilitar Routing
server.use('/', routes())

server.listen(4000, () => console.info('Servidor funcionando...')) // Puerto y arrancar el servidor
 