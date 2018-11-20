import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { 
  TextField,
  MenuItem, 
} from '@material-ui/core'
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
});

let id = 0;
function createData(nombre, edad, lazo, porcentajeAsignado) {
  id += 1;
  return { id, nombre, edad, lazo, porcentajeAsignado };
}

const rows = [
  createData('Nicolas Espindola', 26, "Hermano", 25),
  createData('Nicolas Medela', 25, "Hermano", 50),
  createData('Javier Devoto', 22, "Hermano", 25),
];

const profesiones = [
  { value: "Nicolas Espindola", label: "Nicolas Espindola" },
  { value: "Nicolas Medela", label: "Nicolas Medela" },
  { value: "Javier Devoto", label: "Javier Devoto" },
];

function TablaBeneficiarios(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre y Apellido</TableCell>
            <TableCell numeric>Edad</TableCell>
            <TableCell numeric>Lazo/Vinculo</TableCell>
            <TableCell numeric>Porcentaje asignado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                <TextField
                  fullWidth
                  id="profesion"
                  select
                  className={classes.inputText}
                  value={row.nombre}
                  InputProps={{disableUnderline: true}}
                >
                {profesiones.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
                </TableCell>
                <TableCell numeric>{row.edad}</TableCell>
                <TableCell numeric>{row.lazo}</TableCell>
                <TableCell numeric>{row.porcentajeAsignado + "%"}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TablaBeneficiarios.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablaBeneficiarios);