import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const postLogin = async (objLogin) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/login`,
    JSON.stringify(objLogin), {
    headers: {
      "Content-type": "application/json"
    }
  });
  console.log(rpta);
  return rpta;
}

export const postVerificar = async (token) => {

  const rpta = await axios.post(
    `${URL_BACKEND}/verificar`,
    null, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return rpta
  // const peticion = await fetch(`${URL_BACKEND}/verificar`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   });
  // const rpta = await peticion.json();
  // return rpta

}