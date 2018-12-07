const baseURL = "http://localhost:9000"
export default class ReportService{
    getReportePoliza = async () => {
        let response = await new Promise((resolve) => {
            resolve(this.generarResultado())
        });
        return response;
    }

    getReporteAgentes = async () => {
        let response = await fetch(baseURL + '/agentes/reporte')
        let json = await response.json()
        return json;
    }

    generarResultado = () => {
        return [
            {id: 1, nombreAgente: "Mariano", cantPolizasVigentes: 201, comisionTotal: 200231.43},
            {id: 1, nombreAgente: "Mariano", cantPolizasVigentes: 201, comisionTotal: 200231.43},
            {id: 1, nombreAgente: "Mariano", cantPolizasVigentes: 201, comisionTotal: 200231.43},
            {id: 1, nombreAgente: "Mariano", cantPolizasVigentes: 201, comisionTotal: 200231.43},
        ];
    }
}