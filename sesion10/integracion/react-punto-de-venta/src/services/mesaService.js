import axios from "axios";

import { URL_BACKEND } from "../environments/environments";

export const getMesas = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/mesa`);
  return rpta
}

export const putMesaById = async (objMesa) => {

  const rpta = await axios.put(
    `${URL_BACKEND}/mesa/${objMesa.mesa_id}`,
    JSON.stringify(objMesa),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;

}

export const postMesa = async (objMesa) => {
  const rpta = axios.post(
    `${URL_BACKEND}/mesa`,
    JSON.stringify(objMesa),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
}

export const deleteMesaById = async (mesa_id) => {
  const rpta = await axios.delete(`${URL_BACKEND}/mesa/${mesa_id}`);
  return rpta;
}
