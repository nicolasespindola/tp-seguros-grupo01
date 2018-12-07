const baseURL = "http://localhost:9000"
export default class ClienteService {
  getClientePorDNI = async (dni) => {
    try {
      let response = await fetch(baseURL + '/cliente/dni/' + dni)
      let json = await response.json()
      return json;
    }
    catch (e) {
      alert("No se encontro un cliente con ese numero de DNI")
      return this.getClienteVacio()
    }
  }

  getClienteVacio = () => {
    return {
      fecha_de_nacimiento: "",
      persona: {
        id_persona: '',
        nombre: '',
        direccion: "",
        telefono: '',
        dni: '',
        tipo: '',
      }
    }
  }
}