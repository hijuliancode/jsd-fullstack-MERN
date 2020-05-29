const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/paciente.controller')

module.exports = function() {

  // Agregar nuevos pacientes via POST
  router.post('/pacientes',
    pacienteController.nuevoCliente
  )

  return router
}
