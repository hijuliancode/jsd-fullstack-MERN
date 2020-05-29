const express = require('express')
const mongoose = require('mongoose') // Nos va a permitir interactuar con la db de una forma más sencilla
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express() // Crear el servidor

const whiteList = ['http://localhost:3000']
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whiteList.some( dominio => dominio === origin )
    if (existe) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  }
}

// server.use( cors(corsOptions) ) // Limitar el dominio que puede acceder a los datos
server.use(cors())

// conectar a mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// // Habilitar el body-parser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

// Habilitar Routing
server.use('/', routes())

server.listen(4000, () => {
  console.info('Servidor funcionando...')
 }) // Puerto y arrancar el servidor
