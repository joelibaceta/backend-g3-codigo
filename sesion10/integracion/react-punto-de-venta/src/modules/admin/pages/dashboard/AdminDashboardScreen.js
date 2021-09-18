import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";
import { URL_BACKEND } from '../../../../environments/environments';

const AdminDashboardScreen = () => {

  const [mesas, setMesas] = useState(0)
  const [pedidos, setPedidos] = useState(0)
  const [categorias, setCategorias] = useState(0)
  const [totalMoney, setTotalMoney] = useState(0)

  useEffect(() => {

    const socket = socketIOClient(URL_BACKEND);
    socket.on("reporte-dashboard", (data) => {
      const dataJSON = JSON.parse(data);
      setMesas(dataJSON.totales.mesas);
      setPedidos(dataJSON.totales.pedidos);
      setCategorias(dataJSON.totales.categorias);
      setTotalMoney(dataJSON.total_caja.totalMoney)
    });

    socket.emit("peticion-reporte-dashboard");

    // cleanup del useEffect
    // La función de cleanup se ejecuta cuando un componente es desmontado
    // Se debe usar para cancelar peticiones asincronas, liberar memoria, cancelación
    // de sockets, etc
    return () => {
      socket.disconnect();
    }

  }, [])



  return (
    <main className="container">
      <div className="row mt-4">
        <div className="col">
          <h1 className="display-3 text-center">Dashboard Administrativo</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">Total de Mesas</div>
            <div className="card-body text-center">
              <span className="display-4">{mesas}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">Total de Pedidos</div>
            <div className="card-body text-center">
              <span className="display-4">{pedidos}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">Total de Categorias</div>
            <div className="card-body text-center">
              <span className="display-4">{categorias}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="card shadow">
            <div className="card-header">
              Total Ingresos
            </div>
            <div className="card-body text-center">
              <p className="display-1">
                S/ <span>{totalMoney.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminDashboardScreen
