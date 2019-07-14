import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './cards/CardPromos'
import Loading from './Loading'
import PromosFilters from './PromosFilters'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import {URLGRAPH} from '../constants'
import axios from 'axios'
import { CssBaseline } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
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
    height: '100vh',
  },
  columna: {
    direction: 'row',
  },

})

class Promos extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      promos: [],
      tiendas: [],
      cards: []
    }
  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
    await this.cargarDatos();
    this.normalizarDatos();
  }

  async cargarDatos () {

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{ getPromociones{ id_promocion id_tienda descripcion fecha_inicio fecha_fin}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getPromociones
        this.setState({
          promos: data
        })
      })
      .catch(err => console.log(err))
    
    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{getTiendas{ id_tienda nombre ubicacion categoria}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getTiendas
        this.setState({
          tiendas: data
        })
      })
      .catch(err => console.log(err))
  }

  async normalizarDatos () {

    let tiendas = this.state.tiendas;
    let promos = this.state.promos;
    let newData = []

    for (let i = 0; i < promos.length; i++){
      for (let j = 0; j < tiendas.length; j++){
        if (promos[i].id_tienda === tiendas[j].id_tienda){

          let inicio = promos[i].fecha_inicio.substring(0,10) + " a las " + promos[i].fecha_inicio.substring(12,16) + "."
          let fin = promos[i].fecha_fin.substring(0,10) + " a las " + promos[i].fecha_fin.substring(12,16) + "." 

          newData.push({id_promocion: promos[i].id_promocion, nombre_tienda: tiendas[j].nombre, 
                        categoria: tiendas[j].categoria, button1: "Notificar", button2: "Ver más",
                        ubicacion: tiendas[j].ubicacion, descripcion: promos[i].descripcion,
                        fecha_inicio: inicio, fecha_fin: fin});
        }        
      }
    }

    this.setState({
      cards: newData
    })

    console.log(this.state.cards)
  }

  async formatDatos () {
    
    let newdata = this.state.cards
    for (let i = 0; i < newdata.length; i++) {
      newdata[i].landingtime = newdata[i].landingtime.substring(0,10) + " a las " + newdata[i].landingtime.substring(12,16) + "."
      newdata[i].boardingtime = newdata[i].boardingtime.substring(0,10) + " a las " + newdata[i].boardingtime.substring(12,16) + "."     
    }
    this.setState({
      cards: newdata
    })
    console.log(this.state.cards)
  }
  
  render(){
        const { classes } = this.props;

    if( !this.state.isDataLoaded ){
      return <Loading/>
    }
    // person = person
    // first person es para el objeto del component card y el segundo del arrow function
    let cards = this.state.cards.map(card => {
      return (        
        <Card key={card.id_promocion} card={card}/>   
      )
    })
    return(   
        <div className={classes.root}>
          <CssBaseline/>
          <Navbar/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}>
              <Container maxWidth="lg" direction="row" className={classes.container}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12} sm={4} md={3}><Container><PromosFilters/></Container></Grid>
                  <Grid container xs={12} sm={8} md={9} item={true} spacing={2}>{cards}</Grid>
                </Grid>
              </Container> 
            </div>
          </main>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(Promos));