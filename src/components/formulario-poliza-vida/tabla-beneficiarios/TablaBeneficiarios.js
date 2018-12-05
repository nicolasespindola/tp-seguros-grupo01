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
  IconButton,
} from '@material-ui/core'
import purple from '@material-ui/core/colors/purple';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

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
            <CustomTableCell>Lazo/Vinculo</CustomTableCell>
            <CustomTableCell numeric>Porcentaje asignado (%)</CustomTableCell>
            <CustomTableCell></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beneficiarios.map(beneficiario => {
            return (
              <TableRow key={beneficiario.persona.id_persona}>
                <TableCell>{beneficiario.persona.nombre}</TableCell>
                <TableCell>{beneficiario.lazo_o_vinculo}</TableCell>
                <TableCell numeric>{beneficiario.porcentaje_asignado + " %"}</TableCell>
                <TableCell numeric>
                  <IconButton color="primary"><EditIcon /></IconButton>
                  <IconButton color="secondary"><DeleteIcon /> </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
          <IconButton color="primary"><AddIcon /></IconButton>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

TablaBeneficiarios.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablaBeneficiarios);