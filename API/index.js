const express = require('express')

// Crear el servidor
const server = express()

// Puerto y arrancar el servidor
server.listen(4000, () => console.info('Servidor funcionando...'))
