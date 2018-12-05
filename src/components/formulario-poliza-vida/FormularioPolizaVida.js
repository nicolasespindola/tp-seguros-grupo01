import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  MenuItem,
  Grid,
  Divider,
  Typography,
  Select,
  InputLabel,
  FormControl,
  FormHelperText
} from '@material-ui/core';
import PhoneTextFieldMask from '../text-field-masked/PhoneTextFieldMask';
import DNITextFieldMask from './../text-field-masked/DNITextFieldMask';
import TablaBeneficiarios from './tabla-beneficiarios/TablaBeneficiarios';
import PolizaService from './../../services/PolizaService';

const styles = theme => ({
  formulario: {
    backgroundColor: theme.palette.grey[200],
    padding: '3rem',
    display: 'flex',
  },
  header: {
    marginTop: '3rem',
  },
  estadoPoliza: {
    textAlign: 'right'
  }
});

class FormularioPolizaVida extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.service = new PolizaService()
  }

  async componentDidMount() {
    try {
      let poliza = await this.service.getPoliza(0)
      let ocupaciones = await this.service.getOcupaciones()
      let beneficiarios = await this.service.getBeneficiarios()
      let tipo_de_coberturas = await this.service.getTiposDeCoberturas()
      this.setState({ poliza, ocupaciones, beneficiarios, tipo_de_coberturas })
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.poliza && this.state.ocupaciones && this.state.beneficiarios && this.state.tipo_de_coberturas && <form className={classes.formulario}>

          <Grid container spacing={24}>

            <Grid item xs={12} className={classes.estadoPoliza}>
              <Typography>Poliza #{this.state.poliza.id_seguro_de_vida}</Typography>
              <Typography>Estado: {this.state.poliza.seguro.estado}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="title" >
                Cliente
            </Typography>
              <Typography variant="body2" gutterBottom>
                Datos del interesado
            </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="nombreApellido"
                label="Nombre y apellido"
                className={classes.inputText}
                value={this.state.poliza.seguro.cliente.persona.nombre}
                onChange={this.handleChange('name')}
                InputLabelProps={{ shrink: true, className: classes.inputLabel }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="dni"
                label="DNI"
                className={classes.inputText}
                value={this.state.poliza.seguro.cliente.persona.dni}
                onChange={this.handleChange('name')}
                InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                InputProps={{ inputComponent: DNITextFieldMask }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="telefono"
                label="Telefono"
                className={classes.inputText}
                value={this.state.poliza.seguro.cliente.persona.telefono}
                onChange={this.handleChange('name')}
                InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                InputProps={{ inputComponent: PhoneTextFieldMask }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="direccion"
                label="Direccion"
                className={classes.inputText}
                value={this.state.poliza.seguro.cliente.persona.direccion}
                onChange={this.handleChange('name')}
                InputLabelProps={{ shrink: true, className: classes.inputLabel }}
              />
            </Grid>

            <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Ocupacion</InputLabel>              
              <Select
                native
                defaultValue={this.state.ocupaciones.findIndex(ocupacion => (this.state.poliza.ocupacion.descripcion === ocupacion.descripcion))}
                onChange={this.handleChange}
              >
                {this.state.ocupaciones.map((ocupacion,index) => (
                  <option key={ocupacion.id_ocupacion} value={index}>
                    {ocupacion.descripcion}
                  </option>
                ))}
              </Select>
              <FormHelperText>Eliga una ocupacion</FormHelperText>
              </FormControl>
            </Grid>

            {/* //-------------------------------------------------------------------------------------------------------------------------// */}

            <Grid item xs={12}>
              <Typography variant="title" className={classes.header}>
                Poliza
            </Typography>
              <Typography variant="body2" gutterBottom>
                Datos sobre la poliza
            </Typography>
              <Divider />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Tipo de cobertura</InputLabel>
                <Select
                  native
                  defaultValue={this.state.tipo_de_coberturas.findIndex(cobertura => (this.state.poliza.tipo_de_cobertura.descripcion === cobertura.descripcion))}
                  onChange={this.handleChange}                
                >
                  {this.state.tipo_de_coberturas.map((tipo_cobertura, index) => (
                    <option key={tipo_cobertura.id} value={index}>
                      {tipo_cobertura.descripcion}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Eliga una cobertura</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6}></Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                id="fechaInicio"
                label="Fecha de inicio"
                className={classes.inputText}
                InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                value={this.state.poliza.seguro.fecha_inicio}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                id="fechaFin"
                label="Fecha de fin"
                className={classes.inputText}
                InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                value={this.state.poliza.seguro.fecha_vencimiento}
              />
            </Grid>

            <Grid item xs={12}>
              <TablaBeneficiarios beneficiarios={this.state.poliza.beneficiarios} beneficiarios_posibles={this.state.beneficiarios} />
            </Grid>

          </Grid>
        </form>}
      </React.Fragment>
    )
  }

  handleChange = (value) => { }
}

export default withStyles(styles)(FormularioPolizaVida);