import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

import { CssBaseline } from '@material-ui/core';

const styles = theme => ({
  

  
});


class BarraAdmin extends Component{
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
          <div className="toolbar">
            <Link 
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className="hoverAnimation"
            to={"/admin_usuarios"}>
              Usuarios
            </Link>
            
            <Link 
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className="hoverAnimation"
            to={"/admin_eventos"}>
              Eventos
            </Link>

            <Link 
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className="hoverAnimation"
            to={"/admin_promociones"}>
              Promociones
            </Link>

            <Link 
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className="hoverAnimation"
            to={"/admin_reservas"}>
              Reservas
            </Link>
          </div>
    );
  }
}

export default withRouter(withStyles(styles)(BarraAdmin));