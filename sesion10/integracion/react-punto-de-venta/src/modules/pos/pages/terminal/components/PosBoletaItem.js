import React from 'react'

const PosBoletaItem = ({ objItem }) => {
  return (
    <li className="comanda__item">
      <p className="comanda__nombre">
        <span><strong>{objItem.plato_nom}</strong></span>
        <span>Precio: S/ {objItem.plato_pre}</span>
      </p>
      <p className="comanda__cantidad">{objItem.plato_cant}</p>
      <p className="comanda__precio">
        <strong>S/ {objItem.plato_cant * +objItem.plato_pre}</strong>
      </p>
    </li>
  )
}

export default PosBoletaItem
