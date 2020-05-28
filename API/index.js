const express = require('express')
const mongoose = require('mongoose') // Nos va a permitir interactuar con la db de una forma más sencilla

const server = express() // Crear el servidor

// conectar a mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

server.listen(4000, () => console.info('Servidor funcionando...')) // Puerto y arrancar el servidor
