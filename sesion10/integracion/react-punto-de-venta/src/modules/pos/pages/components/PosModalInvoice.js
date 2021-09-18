import React, { useContext, useRef } from 'react'
import { Modal } from "react-bootstrap";
import PosContext from '../../../../context/posContext';
import ReactToPrint from "react-to-print";

const PosModalInvoice = ({ mostrar, setMostrar }) => {

  const { pedidos, objMesaGlobal, pagarContext } = useContext(PosContext);

  let objPedidoActual = pedidos.find(objPedido => objPedido.mesa_id === objMesaGlobal?.mesa_id);

  const boletaRef = useRef();

  return (

    objPedidoActual ? (
      <Modal show={mostrar} onHide={() => { setMostrar(false) }} size={"xl"} >
        <Modal.Header closeButton>
          <Modal.Title>Boleta</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="container" ref={boletaRef}>
            <div className="col-md-12">
              <div className="invoice">
                <div className="invoice-company text-inverse f-w-600">
                  Company Name, Inc
                </div>


                <div className="invoice-header">
                  <div className="invoice-from">
                    <small>from</small>
                    <address className="m-t-5 m-b-5">
                      <strong className="text-inverse">Twitter, Inc.</strong><br />
                    Street Address<br />
                    City, Zip Code<br />
                    Phone: (123) 456-7890<br />
                    Fax: (123) 456-7890
                    </address>
                  </div>
                  <div className="invoice-to">
                    <small>to</small>
                    <address className="m-t-5 m-b-5">
                      <strong className="text-inverse">Company Name</strong><br />
                    Street Address<br />
                    City, Zip Code<br />
                    Phone: (123) 456-7890<br />
                    Fax: (123) 456-7890
                    </address>
                  </div>
                  <div className="invoice-date">
                    <small>Invoice / July period</small>
                    <div className="date text-inverse m-t-5">August 3,2012</div>
                    <div className="invoice-detail">
                      #0000123DSS<br />
                    Services Product
                    </div>
                  </div>
                </div>


                <div className="invoice-content">

                  <div className="table-responsive">
                    <table className="table table-invoice">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Cant.</th>
                          <th>Descripción</th>
                          <th>P.Unitario</th>
                          <th>P.Total</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          objPedidoActual.platos.map((objPlato, i) => {
                            return (
                              <tr key={objPlato.plato_id}>
                                <td>{i + 1}</td>
                                <td>{objPlato.plato_cant}</td>
                                <td>{objPlato.plato_nom}</td>
                                <td>S/ {objPlato.plato_pre}</td>
                                <td>S/ {+objPlato.plato_pre * +objPlato.plato_cant}</td>
                              </tr>
                            )
                          })
                        }



                      </tbody>
                    </table>
                  </div>


                  <div className="invoice-price">
                    <div className="invoice-price-left">
                      <div className="invoice-price-row">
                        <div className="sub-price">
                          <small>SUBTOTAL</small>
                          <span className="text-inverse">$4,500.00</span>
                        </div>
                        <div className="sub-price">
                          <i className="fa fa-plus text-muted"></i>
                        </div>
                        <div className="sub-price">
                          <small>PAYPAL FEE (5.4%)</small>
                          <span className="text-inverse">$108.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-price-right">
                      <small>TOTAL</small> <span className="f-w-600">$4508.00</span>
                    </div>
                  </div>

                </div>


                <div className="invoice-note">
                  * Make all cheques payable to [Your Company Name]<br />
                  * Payment is due within 30 days<br />
                  * If you have any questions concerning this invoice, contact  [Name, Phone Number, Email]
                </div>


                <div className="invoice-footer">
                  <p className="text-center m-b-5 f-w-600">
                    THANK YOU FOR YOUR BUSINESS
                  </p>
                  <p className="text-center">
                    <span className="m-r-10"><i className="fa fa-fw fa-lg fa-globe"></i> matiasgallipoli.com</span>
                    <span className="m-r-10"><i className="fa fa-fw fa-lg fa-phone-volume"></i> T:016-18192302</span>
                    <span className="m-r-10"><i className="fa fa-fw fa-lg fa-envelope"></i> rtiemps@gmail.com</span>
                  </p>
                </div>

              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success btn-lg" onClick={() => {
            pagarContext().then(rpta => {
              if (rpta) {
                setMostrar(false);
              }
            })
          }}>
            PAGAR
          </button>
          <ReactToPrint
            trigger={() => <button className="btn btn-primary btn-lg">Imprimir</button>}
            content={() => boletaRef.current} />
        </Modal.Footer>
      </Modal >
    ) : null


  )
}

export default PosModalInvoice
