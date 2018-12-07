export default class SeguroShort {
    constructor(){
       this.id_seguro =''
		this.nombreCliente =''
		this.fecha_inicio  =''
		this.fecha_vencimiento  =''
		this.prima  =''
		this.tipo_de_cobertura  =''
		this.estado =''

    }
    static fromJson(seguroJson) {
        const result = Object.assign(new SeguroShort(),seguroJson);
        return result
    }

}