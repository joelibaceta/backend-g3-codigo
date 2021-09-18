import React, { useEffect, useState } from 'react'
import { getPedidos } from '../../../../services/pedidoService'
import { MDBDataTableV5 } from "mdbreact"

const AdminPedidoScreen = () => {

  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [datos, setDatos] = useState({
    columns: [
      { label: "#", field: "posicion" },
      { label: "Id", field: "pedido_id" },
      { label: "Fecha", field: "pedido_fech" },
      { label: "Codigo", field: "pedido_nro" },
      { label: "Estado", field: "pedido_est" },
      { label: "Nro Mesa", field: "mesa_nro" },
      { label: "Usuario", field: "usu_nombre" },
      { label: "Acciones", field: "acciones" }
    ],
    rows: []
  });

  useEffect(() => {
    getPedidos().then(rpta => {
      console.log(rpta.data.pedidos);
      if (rpta.data.ok) {
        let filas = rpta.data.pedidos.map((objPedido, i) => {
          return {
            ...objPedido,
            posicion: i + 1,
            mesa_nro: objPedido.Mesa?.mesa_nro || "s/n",
            usu_nombre: (objPedido.Usuario?.usu_nom || "") + " " + (objPedido.Usuario?.usu_ape || ""),
            acciones: <button>Ver Detalles</button>
          }
        });
        console.log(filas);
        setPedidos(rpta.data.pedidos);
        setDatos({ ...datos, rows: [...filas] })
        setCargando(false);
      } else {
        setCargando(false);
      }
    }).catch(error => {
      setCargando(false);
    })
  }, [])

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4">
            Lista de Pedidos
          </h1>
        </div>
      </div>
      <hr />
      {
        !cargando ?
          <MDBDataTableV5 data={datos} /> :
          <div className="alert alert-info">
            <h4>CARGANDO...</h4>
          </div>
      }


    </main>
  )
}

export default AdminPedidoScreen
