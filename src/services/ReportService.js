export default class ReportService{
    getReportePoliza = async () => {
        let response = await new Promise((resolve) => {
            resolve(this.generarResultado())
        });
        return response;
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