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
import HomeService from '../../services/HomeService'
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
  constructor(props) {
    super(props)
    this.state = {
      polizas: []}
    this.service = new HomeService()

  }

async componentDidMount() {
    try {
      let polizasJson = await this.service.getHome()
      this.setState({ polizas : polizasJson})
    }
    catch (e) {
      console.log(e)
    }
  }
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
            <CustomTableCell>Tipo de cobertura</CustomTableCell>
            <CustomTableCell>Estado</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.polizas.map(poliza => {
            return (
              <TableRow onClick={this.handleClick}>
                <TableCell>{poliza.id_seguro}</TableCell>
                <TableCell>{poliza.nombreCliente}</TableCell>
                <TableCell>{poliza.fecha_inicio}</TableCell>
                <TableCell>{poliza.fecha_vencimiento}</TableCell>
                <TableCell numeric>{"$ " + poliza.prima}</TableCell>
                <TableCell>{poliza.tipo_de_cobertura}</TableCell>
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