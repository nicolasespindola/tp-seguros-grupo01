import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  inputText: {
    fontAlign: 'right',
    fontSize: '0.8125rem',
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

class Home extends Component {
  state = {
    polizas: [
      { id: 1, cliente: "Mauro", fechaInicio: '03/12/2018', fechaFin: '03/12/2018', estado: "Vigente", prima: 3000, tipoDeRiesgo: "Seguro por Defuncion" },
      { id: 2, cliente: "Carlos", fechaInicio: '03/12/2018', fechaFin: '03/12/2018', estado: "Anulada", prima: 3000000, tipoDeRiesgo: "Seguro por Defuncion" },
    ]
  };

  render() {
    const { classes } = this.props;

    return (
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell>Nombre cliente</CustomTableCell>
            <CustomTableCell>Fecha de inicio</CustomTableCell>
            <CustomTableCell>Fecha de fin</CustomTableCell>
            <CustomTableCell>Prima ($)</CustomTableCell>
            <CustomTableCell>Tipo de riesgo</CustomTableCell>
            <CustomTableCell>Estado</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.polizas.map(poliza => {
            return (
              <TableRow onClick={this.handleClick}>
                <TableCell>{poliza.id}</TableCell>
                <TableCell>{poliza.cliente}</TableCell>
                <TableCell>{poliza.fechaInicio}</TableCell>
                <TableCell>{poliza.fechaFin}</TableCell>
                <TableCell numeric>{"$ " + poliza.prima}</TableCell>
                <TableCell>{poliza.tipoDeRiesgo}</TableCell>
                <TableCell>{poliza.estado}</TableCell>
              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    )
  }

  handleClick = (event) => {
    alert("hola");
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);