import React, { Component } from 'react'
import { FormControl, Select, TextField, Dialog, DialogTitle, DialogContent, InputLabel, DialogActions, Button, Grid } from '@material-ui/core';

export default class FormularioBeneficiario extends Component {

  state = {}

  handleEnter = () => {
    this.setState({ ...this.props.beneficiario })
    this.ready = true
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(
      {
        persona: this.state.persona,
        lazo_o_vinculo: this.state.lazo_o_vinculo,
        porcentaje_asignado: this.state.porcentaje_asignado
      },
      this.props.index)
  }

  handleClose = () => {
    this.setState({ isFormDirty: false })
    this.props.onClose()
    this.ready = false
  }

  handleChange = (event) => {
    const name = event.target.name
    let value = event.target.value
    if (name === "persona") {
      value = this.props.personas[value]
    }
    this.setState({ [name]: value })

    if (this.ready && !this.state.isFormDirty) {
      this.setState({ isFormDirty: true })
    }
  }

  getDefaultIndex = () => {
    try {
      let index = this.props.personas.findIndex(value => { return value.id_persona === this.props.beneficiario.persona.id_persona })
      return index
    }
    catch (e) {
      return -1
    }
  }

  render() {
    const { personas } = this.props
    return (
      <Dialog open={this.props.open} onClose={this.handleClose} onEnter={this.handleEnter}>

        <DialogTitle>Beneficiario</DialogTitle>
        <DialogContent>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <FormControl>
                <InputLabel>Persona</InputLabel>
                <Select
                  name="persona"
                  native
                  required
                  defaultValue={this.getDefaultIndex()}
                  onChange={this.handleChange}
                >
                  <option value={-1}>
                    {""}
                  </option>
                  {personas.map((beneficiarioPosible, index) => {
                    return (
                      <option key={"ben_" + index} value={index}>
                        {beneficiarioPosible.nombre}
                      </option>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <TextField
                name="lazo_o_vinculo"
                label="Lazo/Vinculo"
                required
                defaultValue={this.props.beneficiario.lazo_o_vinculo}
                value={this.lazo_o_vinculo}
                onChange={this.handleChange}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                name="porcentaje_asignado"
                label="Porcentaje asignado"
                required
                defaultValue={this.props.beneficiario.porcentaje_asignado}
                value={this.porcentaje_asignado}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button type="submit" color="primary" disabled={!this.state.isFormDirty} onClick={this.handleSubmit}>
            Guardar
            </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancelar
            </Button>
        </DialogActions>

      </Dialog >
    )
  }
}
