import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './context/authContext'

const PrivateRoute = (props) => {

  const { autenticado, cargando, usu_tipo } = useContext(AuthContext)

  return (

    cargando ?
      <div>
        Cargando joven...
      </div> :
      autenticado ?

        usu_tipo === "admin" && props.path.startsWith("/admin") ||
          usu_tipo === "ventas" && props.path.startsWith("/pos") ?

          <Route path={props.path}>
            {props.children}
          </Route> :

          < Redirect to={"/"} />
        :
        <Redirect to={"/"} />
  )
}

export default PrivateRoute
