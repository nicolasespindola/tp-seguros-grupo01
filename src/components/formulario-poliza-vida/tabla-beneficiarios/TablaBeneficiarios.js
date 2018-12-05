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

function TablaBeneficiarios(props) {
  const { classes, beneficiarios, beneficiarios_posibles } = props;

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
          {beneficiarios.map(beneficiario => {
            return (
              <TableRow key={beneficiario.persona.id_persona}>
                <TableCell component="th" scope="row">
                  <TextField
                    fullWidth
                    id="beneficiario"
                    select
                    value={beneficiario.persona.nombre}
                    InputProps={{ disableUnderline: true, className: classes.inputText }}
                  >
                    {beneficiarios_posibles.map(beneficiario_posible => (
                      <MenuItem key={beneficiario_posible.persona.id_persona} value={beneficiario_posible.persona.nombre}>
                        {beneficiario_posible.persona.nombre}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell >{beneficiario.persona.fecha_de_nacimiento}</TableCell>
                <TableCell >{beneficiario.lazo_o_vinculo}</TableCell>
                <TableCell>
                  <TextField
                    className={classes.inputText}
                    InputProps={{
                      className: classes.inputText,
                      endAdornment: <InputAdornment position="end">%</InputAdornment>
                    }}
                    value={beneficiario.porcentaje_asignado} />
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