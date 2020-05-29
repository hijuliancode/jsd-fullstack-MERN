const mongoose = require('mongoose')
const Schema = mongoose.Schema // Nos va a crear la estructura en la base de datos

const pacienteSchema = new Schema({
  nombre: {
    type: String,
    trim: true // Si alguién coloca espacios de más, antes o despues del string automaticamente los elimina
  },
  propietario: {
     type: String,
     trim: true
  },
  telefono: {
    type: String,
    trim: true
 },
  fecha: {
    type: String,
    trim: true
  },
  hora: {
    type: String,
    trim: true
  },
  sintomas: {
    type: String,
    trim: true
  }
})


module.exports = mongoose.model('Paciente', pacienteSchema)
