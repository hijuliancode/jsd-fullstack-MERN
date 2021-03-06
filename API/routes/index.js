const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/paciente.controller')

module.exports = function() {

  // Agregar nuevos pacientes via POST
  router.post('/pacientes',
    pacienteController.nuevoCliente
  )

  // Obtener todos los registros de pacientes en las DB
  router.get('/pacientes',
    pacienteController.obtenerPacientes
  )

  // Obtener un paciente en especifico (ID)
  router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
  )

  // Actualizar paciente
  router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
  )

  // Elimina un paciente por su ID
  router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
  )

  return router
}
