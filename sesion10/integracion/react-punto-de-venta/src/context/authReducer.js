

export const authReducer = (stateAntiguo, payload) => {

  if (payload.action === "INICIAR_SESION") {
    return {
      ...payload.data
    }
  }
  if (payload.action === "CERRAR_SESION") {
    localStorage.removeItem("token");
    return {
      autenticado: false,
      cargando: false,
      usu_nom: null,
      token: null,
      usu_id: null,
      usu_tipo: null
    }

  }

}