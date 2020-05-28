// Dentro del controlador vas a tener diferentes funcions
// que se van a asociar en cierta forma al modelo y en cierta forma con el routing

// Cuando se crea un nuevo cliente

exports.nuevoCliente = (req, res, next) => {
  // TODO: Insertar en la base de datos
  console.log(req.body);
  

  res.json({ mensaje: 'El cliente se agrego correctamente' })
}
