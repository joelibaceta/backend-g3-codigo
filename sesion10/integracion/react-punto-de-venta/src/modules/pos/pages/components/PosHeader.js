import React, { useContext } from 'react'
import AuthContext from '../../../../context/authContext';

const PosHeader = () => {

  const { usu_nom, cerrarSesion } = useContext(AuthContext);


  return (
    <header className="header">
      <div className="header__logo">
        <img src="/imagenes/logo.svg" alt="" />
      </div>
      <div className="header__buscador">
        <img src="/imagenes/search.svg" alt="" />
        <input type="text" className="header__input" placeholder="Busca un término" />
      </div>
      <div className="header__usuario">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
        <span>{usu_nom}</span>
        <button className="btn btn-danger" onClick={() => {
          cerrarSesion();
          // 
        }}>
          Cerrar Sesión
        </button>
      </div>
    </header>
  )
}

export default PosHeader
