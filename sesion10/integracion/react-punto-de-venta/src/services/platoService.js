import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const getPlatos = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/plato`);
  return rpta;
}

export const postPlato = async (objPlato) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/plato`,
    JSON.stringify(objPlato),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
}

export const postUploadImagenByPlatoId = async (file, plato_id) => {

  let miFormData = new FormData();
  miFormData.append("imagen", file);
  miFormData.append("plato_id", plato_id);

  const rpta = await axios.post(
    `${URL_BACKEND}/plato/imagen/upload`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }
  );
  return rpta;

}