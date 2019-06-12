import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';

const styles = theme => ({
  
  root: {
    display: 'flex',
    flex: '1',
    flexGrow: 1,
    backgroundColor: '#000000',
    overflow: 'hidden',
    backgroundImage: "url(" + "http://consejerosviajeros.com/wp-content/uploads/2015/10/1.Portada1-e1444214421337.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    backgroundColor: theme.palette.primary.main
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
  },

});

const items = [
    "Eventos",
    "Promociones",
    "Reservas"
]

const rutas = [
    "events",
    "promos",
    "reservations"
]

class AdminEventos extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      hoverEvent: false,
      hoverPromos: false,
      hoverReservas: false
    };
  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
  }


hoverOn = (hover) => {
  this.setState({ hover: true })
}

hoverOff = (hover) => {
  this.setState({ hover: false })
}


  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <CssBaseline/> 
      <main className={classes.content}>
        <BarraAdmin/>
            <div className={classes.appBarSpacer}>


            </div>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminEventos));