import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
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
import AddIcon from '@material-ui/icons/Add';
import RowBeneficiario from './row-beneficiario/RowBeneficiario';
import FormularioBeneficiario from './formulario-beneficiario/FormularioBeneficiario';

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

class TablaBeneficiarios extends React.Component {

  state = { openDialog: false }

  render() {
    const { classes, beneficiarios } = this.props;

    return (
      <React.Fragment>
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
              {beneficiarios.map((beneficiario, index) => {
                return (
                  <RowBeneficiario
                    key={"beneficiario_" + index}
                    beneficiario={beneficiario}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    index={index}
                  />
                );
              })}
              <TableRow>
                <TableCell><IconButton color="primary" onClick={this.handleCreate}><AddIcon /></IconButton></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>

        {this.state.selected &&
          <FormularioBeneficiario
            open={this.state.openDialog}
            onClose={this.handleClose}
            onSubmit={this.handleSubmit}

            beneficiario={this.state.selected}
            index={this.state.selectedIndex}

            personas={this.props.personas}
          />
        }
      </React.Fragment>
    );
  }

  handleClose = () => {
    this.setState({ openDialog: false, selected: null, selectedIndex: null, })
  }

  handleDelete = (index) => {
    this.props.onDelete(index)
  }

  handleSubmit = (beneficiario, index) => {
    this.props.onSubmit(beneficiario, index)
    this.handleClose()
  }

  handleEdit = (beneficiario, index) => {
    this.setState({ selected: beneficiario, selectedIndex: index, openDialog: true })
  }

  handleCreate = () => {
    this.setState({ selected: {}, openDialog: true })
  }
}

TablaBeneficiarios.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablaBeneficiarios);