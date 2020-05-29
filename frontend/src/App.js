import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import clienteAxios from './config/axios';

// Components
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // State de la app
  const [citas, guardarCitas] = useState([])
  const [consultar, guardarConsultar] = useState(true)

  useEffect(() => {
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // colocar en el state el resultao
            guardarCitas(respuesta.data)
  
            // guardar consulta
            guardarConsultar(false)
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPI()
    }
  }, [consultar]) // Va a estar atento a los cambios en consultar para volver a ejecutar useEffect

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Pacientes citas={citas} />}
        />
        <Route
          exact
          path="/nueva-cita"
          component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
        />
        <Route
          exact
          path="/cita/:id"
          render={(props) => {
            const cita = citas.filter(cita => cita._id === props.match.params.id)
            return (
              <Cita
                cita={cita[0]} // La 0 porque filter crea un arreglo y solo necesitamos 1
                guardarConsultar={guardarConsultar}
              />
            )
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
