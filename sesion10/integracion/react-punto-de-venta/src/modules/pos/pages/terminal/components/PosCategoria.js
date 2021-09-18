import React, { useContext } from 'react'
import PosContext from '../../../../../context/posContext';

const PosCategoria = ({ objCategoria }) => {

  const { objCategoriaGlobal, setObjCategoriaGlobal } = useContext(PosContext);



  return (
    <li className={objCategoria.categoria_id === objCategoriaGlobal?.categoria_id ? "active" : ""}
      onClick={() => {
        setObjCategoriaGlobal({ ...objCategoria });
      }}>
      <img src="/imagenes/plato_blanco.svg" alt="" />
      <span>{objCategoria.categoria_nom}</span>
    </li>
  )
}

export default PosCategoria


