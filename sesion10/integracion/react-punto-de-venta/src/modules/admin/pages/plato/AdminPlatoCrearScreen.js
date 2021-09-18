import React, { useEffect, useState, useRef } from 'react'
import { getCategorias } from '../../../../services/categoriaService';
import { postPlato, postUploadImagenByPlatoId } from '../../../../services/platoService';

const AdminPlatoCrearScreen = () => {

  const [formulario, setFormulario] = useState({
    plato_nom: "",
    plato_img: "",
    plato_pre: 0,
    categoria_id: 0
  })

  const [categorias, setCategorias] = useState([]);

  const imagenRef = useRef();


  useEffect(() => {
    getCategorias().then(rpta => {
      if (rpta.data.ok) {
        setCategorias(rpta.data.content);
      }
    })
  }, [])


  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    postPlato(formulario).then(rpta => {
      if (rpta.data.ok) {
        postUploadImagenByPlatoId(imagenRef.current.files[0], rpta.data.content.plato_id)
          .then((rpta2) => {
            console.log(rpta2);
          })
      }
    })
  }

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header">
              <h4>Formulario de Creación de un Plato</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Nombre:</label>
                  <input type="text" className="form-control"
                    value={formulario.plato_nom}
                    name="plato_nom"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Precio:</label>
                  <input type="number" className="form-control"
                    value={formulario.plato_pre}
                    name="plato_pre"
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Categoria</label>
                  <select name="" className="form-control"
                    value={formulario.categoria_id}
                    name="categoria_id"
                    onChange={handleChange}>
                    <option value="0">Seleccione</option>
                    {
                      categorias.map((objCategoria, i) => {
                        return <option key={i} value={objCategoria.categoria_id}>
                          {objCategoria.categoria_nom}
                        </option>
                      })
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="">Imagen</label>
                  <input type="file" ref={imagenRef} accept="image/*" />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Crear Plato
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminPlatoCrearScreen
