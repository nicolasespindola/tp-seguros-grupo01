import axios from 'axios';
import SeguroShort from '../components/home/SeguroShort';

const baseURL = "http://localhost:9000"
export default class HomeService {
  getHome = async () => {
    try {
      let response = await axios.get(baseURL + '/seguro/traerHome')
      return response.data.map(seguro => SeguroShort.fromJson(seguro));
    }
    catch (e) {
      alert("No se encontraron polizas")
    }
  }
}