import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarIcon: {
    marginRight: theme.spacing.unit * 3,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class HeaderNav extends React.Component {

  state = {
    open: true,
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <PersonIcon className={classes.appBarIcon} />
            <Typography variant="h6" color="inherit" noWrap>
              Segur-OS
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <Link to="/" style={{ textDecoration: 'none', color: 'unset' }}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

          </List>
          <Divider />
          <List>
            <Link to="/poliza/vida/new" style={{ textDecoration: 'none', color: 'unset' }}>
              <ListItem button>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText inset primary="Nuevo Seguro" />
              </ListItem>
            </Link>
          </List>

          <Divider />
          <List>

            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Reportes" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/reportes/comisiones" style={{ textDecoration: 'none', color: 'unset' }}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Comisiones" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

          </List>
          <Divider />
        </Drawer >
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div >
    );
  }
}

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderNav);