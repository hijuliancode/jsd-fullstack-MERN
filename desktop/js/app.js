fetch('http://localhost:4000/pacientes')
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
 