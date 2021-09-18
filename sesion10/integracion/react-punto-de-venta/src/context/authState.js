import React, { useEffect, useReducer } from 'react'
import AuthContext from './authContext'
import { authReducer } from './authReducer'
import { withRouter } from "react-router-dom"
import { postVerificar } from '../services/authService'

const initialState = {
  autenticado: false,
  cargando: true,
  token: null,
  usu_nom: null,
  usu_id: null,
  usu_tipo: null
}


const AuthState = (props) => {

  const [state, setState] = useReducer(authReducer, initialState);

  console.log(props);

  const iniciarSesionContext = (token) => {

    localStorage.setItem("token", token);
    let payloadString = token.split(".")[1];
    let payloadStringDecript = atob(payloadString);
    let payloadJson = JSON.parse(payloadStringDecript);

    setState(
      {
        action: "INICIAR_SESION",
        data: {
          autenticado: true,
          cargando: false,
          token: token,
          usu_nom: payloadJson.usu_nom,
          usu_id: payloadJson.usu_id,
          usu_tipo: payloadJson.usu_tipo
        }
      }
    )



  }

  const iniciarSesionConLocalStorage = () => {

    let token = localStorage.getItem("token");
    if (token) {
      postVerificar(token).then(rpta => {
        if (rpta.data.ok) {
          iniciarSesionContext(token)
        }
      }).catch(error => {
        console.log(error);
        cerrarSesion();
      })
    } else {
      cerrarSesion();
    }


  }

  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, [])


  const cerrarSesion = () => {
    setState({
      action: "CERRAR_SESION"
    })
    //props.history.replace("ruta"), similar al "push"
    // pero no deja historial de las páginas visitaras anteriormente
    // para no hacer un "atrás!"
    // props.history.replace("/");
  }


  return (
    <AuthContext.Provider value={{
      iniciarSesionContext,
      cerrarSesion,
      ...state
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default withRouter(AuthState)
