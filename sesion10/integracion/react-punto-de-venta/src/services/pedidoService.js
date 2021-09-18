import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const postPedido = async (objPedido) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/pedido`,
    JSON.stringify(objPedido),
    {
      headers: {
        "Content-type": "application/json"
      }
    });
  return rpta;
}

export const getPedidos = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/pedido`);
  return rpta;
}