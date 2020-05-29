import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = (props) => {
  if(!props.cita) {
    props.history.push('/')
    return null // para evitar error
  }

  // Extraer por props
  const { cita: { _id, nombre, propietario, telefono, fecha, hora, sintomas } } = props

  const eliminarCita = (_id) => {
    console.log(_id);
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una cita eliminada no se puede recuperar.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // Alerta de que ha sido eliminado
        Swal.fire(
          'Deleted!',
          'La cita ha sido eliminada.',
          'success'
        )

        // Eliminado de la base de datos
        clienteAxios.delete(`/pacientes/${_id}`)
          .then(resultado => {
            console.log(resultado) 
            props.guardarConsultar(true)
            props.history.push('/')
          })
          .catch(error => {
            console.error('error => ', error)
          })
      }
    })

  }

  return (
    <Fragment>
      <h1 className="my-5">Cita: {nombre}</h1>
      <div className="mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text-uppercase py-2 mx-5 font-weight-bold">Volver</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className="mb-3">{nombre}</h3>
                  <small className="fecha-alta">
                    {fecha} - {hora}
                  </small>
                </div>
                <p className="mb-0">
                  {sintomas}
                </p>
                <div className="contacto py-3">
                  <p>Dueño: {propietario}</p>
                  <p>Telefono: {telefono}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-danger text-uppercase py-2 px-5 font-weight-bold"
                    type="button"
                    onClick={() => eliminarCita(_id)} // De esta forma hasta que el usuario de click se ejecuta la función
                  >
                    Eliminar Cita &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Cita);
