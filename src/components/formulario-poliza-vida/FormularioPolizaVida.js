import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  Grid,
  Divider,
  Typography,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Button
} from '@material-ui/core';
import PhoneTextFieldMask from '../text-field-masked/PhoneTextFieldMask';
import DNITextFieldMask from './../text-field-masked/DNITextFieldMask';
import TablaBeneficiarios from './tabla-beneficiarios/TablaBeneficiarios';
import PolizaService from './../../services/PolizaService';
import SaveIcon from '@material-ui/icons/Save';

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
  },
  buttons: {
    justifyContent: 'flex-end',
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20,
  },
});

class FormularioPolizaVida extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.service = new PolizaService()
    this.polizaID = this.props.match.params.id;
  }

  async componentDidMount() {
    try {
      let poliza = await this.service.getPoliza(this.polizaID)
      let ocupaciones = await this.service.getOcupaciones()
      let beneficiarios = await this.service.getBeneficiarios(this.polizaID)
      let tipo_de_coberturas = await this.service.getTiposDeCoberturas()
      this.setState({ poliza, ocupaciones, beneficiarios, tipo_de_coberturas })
      this.ready = true
    }
    catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate() {
    if (this.ready && !this.state.isFormDirty) {
      this.setState({ isFormDirty: true })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.poliza &&
          this.state.ocupaciones &&
          this.state.beneficiarios &&
          this.state.tipo_de_coberturas &&
          <React.Fragment>
            <form className={classes.formulario}>

              <Grid container spacing={24}>

                <Grid item xs={12} className={classes.estadoPoliza}>
                  <Typography>Poliza #{this.state.poliza.seguro.id_seguro}</Typography>
                  <Typography>Estado: {this.state.poliza.seguro.estado.toUpperCase()}</Typography>
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
                    label="DNI"
                    className={classes.inputText}
                    value={this.state.poliza.seguro.cliente.persona.dni}
                    onChange={this.handleChangeDNI}
                    InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                    InputProps={{ inputComponent: DNITextFieldMask }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Nombre y apellido"
                    className={classes.inputText}
                    value={this.state.poliza.seguro.cliente.persona.nombre}
                    InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                    InputProps={{ readOnly: true }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Telefono"
                    className={classes.inputText}
                    value={this.state.poliza.seguro.cliente.persona.telefono}
                    InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                    InputProps={{ readOnly: true, inputComponent: PhoneTextFieldMask }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Direccion"
                    className={classes.inputText}
                    value={this.state.poliza.seguro.cliente.persona.direccion}
                    InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                    InputProps={{ readOnly: true }}
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
                      {this.state.ocupaciones.map((ocupacion, index) => (
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
                        <option key={'cobertura_' + tipo_cobertura.id_tipo_de_cobertura} value={index}>
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
                    label="Fecha de fin"
                    className={classes.inputText}
                    InputLabelProps={{ shrink: true, className: classes.inputLabel }}
                    value={this.state.poliza.seguro.fecha_vencimiento}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TablaBeneficiarios
                    personas={this.state.beneficiarios}
                    beneficiarios={this.state.poliza.beneficiarios}
                    onDelete={this.handleDelete}
                    onSubmit={this.handleSubmit}
                  />
                </Grid>

                <Grid container item xs={12} justify="flex-end">
                  <Button fullWidth color="primary" type="submit" variant="outlined" disabled={!this.state.isFormDirty} ><SaveIcon className={classes.leftIcon} />Guardar cambios</Button>
                </Grid>

              </Grid>
            </form>
          </React.Fragment>
        }
      </React.Fragment>

    )
  }

  handleChange = (value) => { }

  handleChangeDNI = (event) => {
    let value = event.target.value
    this.setState(prevState => {
      prevState.poliza.seguro.cliente.persona.dni = value
      return prevState
    })
  }

  handleSubmit = (beneficiario, index) => {
    if (index !== null) {
      this.handleEdit(beneficiario, index)
    }
    else {
      this.handleCreate(beneficiario)
    }
  }

  handleCreate = (beneficiario) => {
    this.setState(prevState => {
      prevState.poliza.beneficiarios.push(beneficiario)
      return prevState
    })
  }

  handleEdit = (beneficiario, index) => {
    this.setState(prevState => {
      prevState.poliza.beneficiarios[index] = beneficiario
      return prevState
    })
  }

  handleDelete = (i) => {
    this.setState(prevState => {
      prevState.poliza.beneficiarios = prevState.poliza.beneficiarios.filter((element, index) => (index !== i))
      return prevState
    })
  }
}

export default withStyles(styles)(FormularioPolizaVida);