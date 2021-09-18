import React, { useEffect, useState } from 'react'
import { getMesas } from '../../../../../services/mesaService';
import PosMesa from './PosMesa'

const PosMesas = () => {

  const [mesas, setMesas] = useState([]);
  useEffect(() => {
    getMesas().then(rpta => {
      if (rpta.data.ok) {
        setMesas(rpta.data.content);
      }
    })
  }, [])


  return (
    <div className="mesas">
      <ul className="mesas__lista">
        {
          mesas.map((objMesa) => {
            return <PosMesa key={objMesa.mesa_id} objMesa={objMesa} />
          })
        }
      </ul>
      <div className="mesas__info"></div>
    </div>
  )
}

export default PosMesas
