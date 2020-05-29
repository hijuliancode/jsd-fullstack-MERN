// Dentro del controlador vas a tener diferentes funcions
// que se van a asociar en cierta forma al modelo y en cierta forma con el routing

const Paciente = require('../models/Paciente')

// Cuando se crea un nuevo cliente

exports.nuevoCliente = async (req, res, next) => {
  // Crear objeto de paciente con datos de request.body
  const paciente = new Paciente(req.body)
  try { 
    await paciente.save()
    res.json({ mensaje: 'El cliente se agregó correctamente' })
  } catch (error) {
    console.error(error);
    next()
  }
}
