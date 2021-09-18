import React, { useEffect, useState } from 'react'
import { getCategorias } from '../../../../../services/categoriaService';
import PosCategoria from './PosCategoria'

const PosCategorias = () => {

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getCategorias().then((rpta) => {
      if (rpta.data.ok) {
        setCategorias(rpta.data.content);
      }
    })
  }, [])


  return (
    <nav className="menu">
      <ul className="menu__lista">
        {categorias.map((objCategoria) => {
          return <PosCategoria key={objCategoria.categoria_id}
            objCategoria={objCategoria} />
        })}
      </ul>
    </nav>
  )
}

export default PosCategorias
