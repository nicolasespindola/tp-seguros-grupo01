import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  MenuItem,
  InputAdornment,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
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
  inputText: {
    fontAlign: 'right',
    fontSize: '0.8125rem',
  },
  toolbar: {
    //backgroundColor: theme.palette.primary.main,
  }
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
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" id="tableTitle">
          Beneficiarios
        </Typography>
      </Toolbar>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <CustomTableCell>Nombre y Apellido</CustomTableCell>
            <CustomTableCell>Edad</CustomTableCell>
            <CustomTableCell>Lazo/Vinculo</CustomTableCell>
            <CustomTableCell>Porcentaje asignado (%)</CustomTableCell>
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
                    value={row.nombre}
                    InputProps={{ disableUnderline: true, className: classes.inputText }}
                  >
                    {profesiones.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell >{row.edad}</TableCell>
                <TableCell >{row.lazo}</TableCell>
                <TableCell>
                  <TextField
                    className={classes.inputText}
                    InputProps={{
                      className: classes.inputText,
                      endAdornment: <InputAdornment position="end">%</InputAdornment>
                    }} />
                </TableCell>

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