import React, { Component } from 'react'
import {
  TableCell,
  TableRow,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class RowBeneficiario extends Component {
  handleEdit = () => {
    this.props.onEdit(this.props.beneficiario, this.props.index)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.index)
  }

  render() {
    const { beneficiario } = this.props
    return (
      <TableRow>
        <TableCell>{beneficiario.persona.nombre}</TableCell>
        <TableCell>{beneficiario.lazo_o_vinculo}</TableCell>
        <TableCell numeric>{beneficiario.porcentaje_asignado + " %"}</TableCell>
        <TableCell numeric>
          <IconButton color="primary" onClick={this.handleEdit}><EditIcon /></IconButton>
          <IconButton color="secondary" onClick={this.handleDelete}><DeleteIcon /> </IconButton>
        </TableCell>
      </TableRow>
    )
  }

}
