import React, { useState } from 'react'
import { Modal } from "react-bootstrap"
import { postMesa } from '../../../services/mesaService';


const formularioVacio = {
  mesa_cap: "",
  mesa_nro: 0
}


const AdminModalCrearMesa = ({ mostrarModalCrear, setMostrarModalCrear, traerMesas }) => {

  const [formulario, setFormulario] = useState({ ...formularioVacio });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    postMesa(formulario).then((rpta) => {
      if (rpta.data.ok) {
        setMostrarModalCrear(false);
        setFormulario(formularioVacio);
        traerMesas();
      }
    });

  }


  return (
    <Modal show={mostrarModalCrear} onHide={() => {
      setMostrarModalCrear(false)
    }} size={"xl"} >
      <Modal.Header closeButton>
        <Modal.Title>Crear Mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="">Nro Mesa:</label>
            <input type="text" className="form-control"
              value={formulario.mesa_nro} name="mesa_nro" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Capacidad:</label>
            <input type="number" className="form-control"
              value={formulario.mesa_cap} name="mesa_cap" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Crea Mesa</button>
          </div>
        </form>


      </Modal.Body>

    </Modal >
  )
}

export default AdminModalCrearMesa
