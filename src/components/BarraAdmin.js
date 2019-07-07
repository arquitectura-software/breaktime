import React, { Component } from 'react'
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
import ListItemsAdmin from './listItemsAdmin';
import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles';
import auth from './auth'

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
      backgroundColor: "#303F9F",
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
      paddingRight: 24, 
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

  handleDrawerOpen = () => {
    this.setState({open: true})
  };

  handleDrawerClose = () => {
    this.setState({open: false})
  };

  render(){
    const { classes } = this.props;

    return(
      <Grid className={classes.barra}>
          <AppBar position="absolute"  className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
              <Toolbar variant="dense" className={classes.toolbar}>
              
              <IconButton edge="start" color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} 
            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}>        
                <MenuIcon />
              </IconButton>                
              <Typografy component="h1" variant="h6" color ="inherit" noWrap className={classes.title}>
                <Link className={classes.textoButton} to="/Admin">
                    Administrador
                </Link>
              </Typografy>
          
              <Button className={classes.textoButton} onClick={() => 
                auth.logoutAdmin(() => {
                  this.props.history.push("/")
                })}>Cerrar Sesión</Button>
              </Toolbar>
          </AppBar>

        <Drawer variant="temporary"
          classes={{paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}
          open={this.state.open}>

          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
            <List><ListItemsAdmin /></List>
          <Divider />   

        </Drawer>
      </Grid>
  )
  }  
}

export default withRouter(withStyles(styles)(BarraAdmin))