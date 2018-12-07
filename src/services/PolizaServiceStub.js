export default class PolizaServiceStub {
  getPoliza = async (id) => {
    let response = await new Promise((resolve) => {
      resolve(this.generarResultado())
    });
    return response;
  }

  generarResultado = () => {
    return {
      id_seguro_de_vida: '15612345',
      seguro: {
        cliente: {
          fecha_de_nacimiento: '10/12/1992',
          persona: {
            id_persona: '0',
            nombre: 'Nicolas Espindola',
            direccion: "America 4122 entre Industria y O'Donnell",
            telefono: '01137607683',
            dni: '36739559',
            tipo: 'c',
          }
        },
        estado: 'vigente',
        fecha_inicio: '2017-05-24',
        fecha_vencimiento: '2017-05-24',
        prima: 30002.32,
        monto_asegurado: 201232132143,
        tipo: 'v',
      },
      tipo_de_cobertura: {
        id_tipo_de_cobertura: '0',
        descripcion: 'Seguro por defuncion',
        valor_prima_base: 32003.32,
        monto_asegurado_base: 100023023,
        tipo: 'v',
      },
      ocupacion: {
        id_ocupacion: '1',
        descripcion: 'Doctor',
        valor_de_riesgo: 3.2,
      },
      beneficiarios: [
        {
          persona: {
            id_persona: '0',
            nombre: 'Nicolas Espindola',
            direccion: "America 4122 entre Industria y O'Donnell",
            telefono: '01137607683',
            dni: '36739559',
            tipo: 'c',
          },
          lazo_o_vinculo: "Hermano",
          porcentaje_asignado: 6.0,
        },
      ],
    }
  }

  getOcupaciones = async () => {
    let response = await new Promise((resolve) => {
      resolve(this.generarOcupaciones())
    });
    return response;
  }

  generarOcupaciones = () => {
    return [
      { id_ocupacion: '1', descripcion: 'Doctor', valor_de_riesgo: 3.2, }
    ];
  }

  getBeneficiarios = async () => {
    let response = await new Promise((resolve) => {
      resolve(this.generarBeneficiarios())
    });
    return response;
  }

  generarBeneficiarios = () => {
    return [
      {
        persona: {
          id_persona: '0',
          nombre: 'Nicolas Espindola',
          direccion: "America 4122 entre Industria y O'Donnell",
          telefono: '01137607683',
          dni: '36739559',
          tipo: 'c',
        },
        lazo_o_vinculo: "Hermano",
        porcentaje_asignado: 6.0,
      },
    ];
  }

  getTiposDeCoberturas = async () => {
    let response = await new Promise((resolve) => {
      resolve(this.generarTiposDeCoberturas())
    });
    return response;
  }

  generarTiposDeCoberturas = () => {
    return [
      { id: '0', descripcion: 'Seguro por defuncion', valor_prima_base: 32003.32, tipo: 'v', }
    ];
  }
}