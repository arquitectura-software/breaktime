import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import PromosFilters from './PromosFilters'
import Card from './cards/CardPromos'
import Fab from '@material-ui/core/Fab';
import {URLGRAPH} from '../constants'
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  
  root: {
    display: 'flex',
    flex: '1',
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  fab: {
    marginRight: "1em",
    top: 'auto',
    right: '1em',
    bottom: '1em',
    left: 'auto',
    position: 'fixed',
  },

  appBarSpacer: {
    marginBottom: theme.spacing(12)
  },
  
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

});


class AdminPromociones extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,   
      cards: [],
      promos: [],
      tiendas: []   
    };
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
                        categoria: tiendas[j].categoria, button1: "Editar", button2: "Eliminar",
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

  render(){

    let cards = this.state.cards.map(card => {
      return (        
        <Card card={card}/>   
      )
    })

    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <CssBaseline/> 
        <BarraAdmin/>
        <main className={classes.content}>        
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" direction="row" className={classes.container}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
              <Grid item xs={12} sm={4} md={3}><Container><PromosFilters/></Container></Grid>
              <Grid container xs={12} sm={8} md={9} item={true} spacing={2}>{cards}</Grid>
            </Grid>
          </Container>
          <Link className={classes.textoButton} to="/crear_promo">
              <Fab color="primary" size="large" aria-label="Add" className={classes.fab}>
                <AddIcon />            
              </Fab>
              </Link>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminPromociones));