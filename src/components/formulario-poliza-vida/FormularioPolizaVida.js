import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  MenuItem,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';
import PhoneTextFieldMask from '../text-field-masked/PhoneTextFieldMask';
import DNITextFieldMask from './../text-field-masked/DNITextFieldMask';
import TablaBeneficiarios from './tabla-beneficiarios/TablaBeneficiarios';

const styles = theme => ({
  formulario: {
    backgroundColor: theme.palette.grey[200],
    padding: '3rem',
    display: 'flex',
  },
  inputText: {},
  inputLabel: {
    //fontWeight: 'bold',
  },
  header: {
    marginTop: '3rem',
  },
  estadoPoliza:{
    textAlign:'right'
  }
});

class FormularioPolizaVida extends Component {

  state = {
    profesiones: [
      { value: "Medico", label: "Medico" },
      { value: "Bombero", label: "Bombero" },
      { value: "Contador", label: "Contador" },
    ],
    coberturas: [
      { value: "Todo riesgo", label: "Todo riesgo" },
      { value: "Secuestro", label: "Secuestro" },
      { value: "Enfermedad", label: "Enfermedad" },
    ],
    profesion: "Medico",
    cobertura: "Todo riesgo",
    nombreApellido: "Nicolas Espindola",
    direccion: "America 4122 entre Industria y O'Donnell",
    dni: "36739559",
    telefono: "01137607683",
    idPoliza: "3403238",
    estadoPoliza: "Vigente"
  };

  render() {
    const { classes } = this.props;
    const { profesiones, coberturas } = this.state;
    return (
      <form className={classes.formulario}>

        <Grid container spacing={24}>

          <Grid item xs={12} className={classes.estadoPoliza}>
          <Typography>Poliza #{this.state.idPoliza}</Typography>
          <Typography>Estado: {this.state.estadoPoliza}</Typography>
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
              value={this.state.nombreApellido}
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
              value={this.state.dni}
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
              value={this.state.telefono}
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
              value={this.state.direccion}
              onChange={this.handleChange('name')}
              InputLabelProps={{ shrink: true, className: classes.inputLabel }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="profesion"
              select
              label="Profesión"
              className={classes.inputText}
              value={this.state.profesion}
              onChange={this.handleChange('currency')}
              helperText="Eliga una profesión"
            >
              {profesiones.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
            <TextField
              fullWidth
              id="tipoCobertura"
              select
              label="Cobertura"
              className={classes.inputText}
              value={this.state.cobertura}
              onChange={this.handleChange('currency')}
              helperText="Eliga el tipo de cobertura"
            >
              {coberturas.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              id="fechaInicio"
              label="Fecha de inicio"
              className={classes.inputText}
              InputLabelProps={{ shrink: true, className: classes.inputLabel }}
              defaultValue="2017-05-24"
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
              defaultValue="2017-05-24"
            />
          </Grid>

          <Grid item xs={12}>
            <TablaBeneficiarios/>
          </Grid>

        </Grid>
      </form>
    )
  }

  handleChange = (value) => { }
}

export default withStyles(styles)(FormularioPolizaVida);