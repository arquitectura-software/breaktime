import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typografy from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItems from './listItems';

import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid' 
import { withStyles } from '@material-ui/styles';

const drawerWidth = 240;
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
    },
    menuButton: {

    },
    title: {
      flexGrow: 1,
    },
    barra: {
      marginBottom: '3%',
    },
    textoButton: {
      color: 'white',
      textDecorationLine: 'none',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },



    menuButtonHidden: {
      display: 'none',
    },

    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },

    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },

});

class BarraAdmin extends Component{

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  render(){
    const { classes } = this.props;

    return(
      <Grid className={classes.barra}>
          <AppBar position="absolute"  className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
              <Toolbar variant="dense" className={classes.toolbar}>
                
                 <Typografy component="h1" variant="h6" color ="inherit" noWrap className={classes.title}>
                 <Link className={classes.textoButton} to="/admin">
                      BreakTime
                      </Link>
                  </Typografy>

                  <Link className={classes.textoButton} to="/admin_usuarios">
                    <Button><p className ={classes.textoButton}>Usuarios</p></Button>
                  </Link>
                  <Link className={classes.textoButton} to="/admin_eventos">
                    <Button><p className ={classes.textoButton}>Eventos</p></Button>
                  </Link>
                  <Link className={classes.textoButton} to="/admin_reservas">
                    <Button><p className ={classes.textoButton}>Reservas</p></Button>
                  </Link>
                  <Link className={classes.textoButton} to="/admin_promociones">
                    <Button><p className ={classes.textoButton}>Promociones</p></Button>
                  </Link>

              </Toolbar>
          </AppBar>
      </Grid>
  )
  }
  
}

export default withRouter(withStyles(styles)(BarraAdmin))
