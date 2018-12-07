const baseURL = "http://localhost:9000"
export default class PolizaService {
  getPoliza = async (id) => {
    let response = await fetch(baseURL + '/seguro/' + id)
    let json = await response.json()
    return json;
  }

  getOcupaciones = async () => {
    let response = await fetch(baseURL + '/ocupaciones/all')
    let json = await response.json()
    return json;
  }

  getBeneficiarios = async (id) => {
    let response = await fetch(baseURL + '/seguro/' + id + '/beneficiariosPosibles')
    let json = await response.json()
    return json;
  }

  getTiposDeCoberturas = async () => {
    let response = await fetch(baseURL + '/coberturas/all')
    let json = await response.json()
    return json;
  }
}