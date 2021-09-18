import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const getCategorias = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/categoria`);
  return rpta;
}

export const getPlatosByCategoriaId = async (categoria_id) => {

  const rpta = await axios.get(`${URL_BACKEND}/categoria/${categoria_id}/platos`);
  return rpta;

}