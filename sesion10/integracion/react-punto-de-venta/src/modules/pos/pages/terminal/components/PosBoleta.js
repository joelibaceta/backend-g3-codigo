import React, { useContext, useState } from 'react'
import PosContext from '../../../../../context/posContext';
import PosModalInvoice from '../../components/PosModalInvoice';
import PosBoletaItem from './PosBoletaItem'


const PosBoleta = () => {

  const { pedidos, objMesaGlobal } = useContext(PosContext);
  const [mostrar, setMostrar] = useState(false);

  let items = [];

  // si existe una mesa global seleccionada, entonces
  // obtener el valor del arreglo de PLATOS de esa mesa
  if (objMesaGlobal) {
    // encontrando el objeto que tiene la mesa global seleccionada
    let objPedidoActual = pedidos.find((objPedido) => objPedido.mesa_id === objMesaGlobal.mesa_id);
    // si el objetoPedidoActual existe (lo cual implica que existe un pedido para la mesa global seleccionada)
    if (objPedidoActual) {
      // tomamos sus platos en el arreglo items
      items = objPedidoActual.platos;
    }
  }


  return (
    <div className="boleta">
      <h3>Pedido Mesa: &nbsp;
        <span className="color-secundario">
          {objMesaGlobal ? objMesaGlobal.mesa_nro : "Seleccione"}
        </span>
      </h3>
      <hr />
      <div className="comanda">
        <h4 className="comanda__mesa">

          {objMesaGlobal ? "Mesa " + objMesaGlobal.mesa_nro : "Seleccione"}
        </h4>
        <p className="comanda__usuario">Carlos Jimenez</p>
        <hr />

        <ul className="comanda__lista">
          {
            items.map(objItem => {
              return <PosBoletaItem key={objItem.plato_id}
                objItem={objItem} />
            })
          }
        </ul>
        <button className="boton boton-success boton-block" onClick={() => {
          setMostrar(true);
        }}>
          PAGAR
        </button>
      </div>
      <PosModalInvoice mostrar={mostrar}
        setMostrar={setMostrar} />
    </div >
  )
}

export default PosBoleta
