import React, { useContext } from 'react'
import PosContext from '../../../../../context/posContext';

const PosPlato = ({ objPlato }) => {

  const { modificarPlatoContext } = useContext(PosContext);

  return (
    <div className="carta__plato">
      <img
        src={objPlato.plato_img}
        alt="" />
      <h4 className="carta__titulo">{objPlato.plato_nom}</h4>
      <span className="carta__precio">S/ {(+objPlato.plato_pre).toFixed(2)}</span>
      <div className="carta__botones">
        <button className="boton boton-outline-primary boton-restar"
          onClick={() => {
            modificarPlatoContext({ ...objPlato }, "restar")
          }}>
          -1
        </button>
        <button className="boton boton-outline-primary boton-sumar"
          onClick={() => {
            modificarPlatoContext({ ...objPlato }, "sumar");
          }}>
          +1
        </button>
      </div>
    </div>
  )
}

export default PosPlato
