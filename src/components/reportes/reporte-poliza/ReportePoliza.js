import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import ReportService from '../../../services/ReportService';

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
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
  
  const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class ReportePoliza extends React.Component {

  state = {
    reporteUsuarios: []
  }

  constructor(props){
    super(props);
    this.service = new ReportService()
  }

  async componentDidMount(){
    try{
      let reporte = await this.service.getReportePoliza()
      this.setState({ reporteUsuarios: reporte });
    }
    catch(e){
      console.log(e);
    }
  }

  render() {

    const {classes} = this.props;

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>ID</CustomTableCell>
              <CustomTableCell>Nombre agente</CustomTableCell>
              <CustomTableCell>Polizas vigentes</CustomTableCell>
              <CustomTableCell>Comision total ($)</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.reporteUsuarios.map(consulta => {
              return (
                <TableRow onClick={this.handleClick} className={classes.row} key={consulta.id}>
                  <TableCell>{consulta.id}</TableCell>
                  <TableCell>{consulta.nombreAgente}</TableCell>
                  <TableCell>{consulta.cantPolizasVigentes}</TableCell>
                  <TableCell>{"$ " + consulta.comisionTotal}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

ReportePoliza.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ReportePoliza);