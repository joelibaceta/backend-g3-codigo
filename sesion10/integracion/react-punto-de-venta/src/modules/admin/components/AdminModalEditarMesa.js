import React, { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap"
import { putMesaById } from '../../../services/mesaService';

const AdminModalEditarMesa = ({
  mostrarModalEditar,
  setMostrarModalEditar,
  objMesaEditar,
  traerMesas }) => {

  const [formulario, setFormulario] = useState(objMesaEditar);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    setFormulario({ ...objMesaEditar })
  }, [objMesaEditar])

  const handleSubmit = e => {
    e.preventDefault();
    putMesaById(formulario).then(rpta => {
      if (rpta.data.ok) {
        alert("Mesa editada correctamente");
        setMostrarModalEditar(false);
        traerMesas();
      }
    })
  }


  return (
    <Modal show={mostrarModalEditar} onHide={() => {
      // settear objMesaEditar a null nuevamente
      setMostrarModalEditar(false)
    }} size={"xl"} >
      <Modal.Header closeButton>
        <Modal.Title>Editar Mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          formulario ?
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Id:</label>
                <input type="text" className="form-control" value={formulario.mesa_id} disabled />
              </div>
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
                <button className="btn btn-primary" type="submit">Guardar Cambios</button>
              </div>
            </form> : null
        }

      </Modal.Body>

    </Modal >
  )
}

export default AdminModalEditarMesa
