import axios from 'axios';

const baseURL = "http://localhost:9000"
export default class PolizaService {
  getPoliza = async (id) => {
    if (id > 0) {
      let response = await axios.get(baseURL + '/seguro/' + id)
      let json = response.data
      return json;
    }
    else {
      let response = await new Promise((resolve) => {
        resolve(this.generarPolizaNueva())
      });
      console.log(response)
      return response;
    }
  }

  getOcupaciones = async () => {
    let response = await axios.get(baseURL + '/ocupaciones/all')
    let json = response.data
    return json;
  }

  getBeneficiarios = async () => {
    let response = await axios.get(baseURL + '/seguro/beneficiariosPosibles')
    let json = response.data
    return json;
  }

  getTiposDeCoberturas = async () => {
    let response = await axios.get(baseURL + '/coberturas/all')
    let json = response.data
    return json;
  }

  generarPolizaNueva = async () => {
    return {
      "seguro": {
        "cliente": {
          "persona": {
            "id_persona": null,
            "nombre": "",
            "direccion": "",
            "telefono": null,
            "dni": null,
            "tipo": null,
            "seguros": []
          },
          "fecha_de_nacimiento": "",
          "id_seguro_vinculado": null,
          "beneficiarios": []
        },
        "id_seguro": -1,
        "id_agente": 1,
        "estado": "vigente",
        "prima": null,
        "tipo": "v",
        "fecha_vencimiento": "",
        "fecha_inicio": ""
      },
      "tipo_de_cobertura": {},
      "ocupacion": {},
      "beneficiarios": []
    }
  }

  crearPoliza = async (poliza) => {
    let body = this.generarBody(poliza)
    console.log(body)
    let response = await axios.post(baseURL + '/seguro/vida/new', body)
    return response.data
  }

  formatearFecha = (fecha) => {
    return fecha.replace('-', '').replace('-', '')
  }

  generarBody = (poliza) => {
    return {
      id_cliente: poliza.seguro.cliente.persona.id_persona,
      id_agente: poliza.seguro.id_agente,
      fecha_inicio: this.formatearFecha(poliza.seguro.fecha_inicio),
      fecha_vencimiento: this.formatearFecha(poliza.seguro.fecha_vencimiento),
      prima: poliza.seguro.prima,
      suma_asegurada: poliza.seguro.suma_asegurada,
      id_tipo_de_cobertura: poliza.tipo_de_cobertura.id_tipo_de_cobertura,
      id_ocupacion: poliza.ocupacion.id_ocupacion,
      beneficiarios: poliza.beneficiarios,
    }
  }
}