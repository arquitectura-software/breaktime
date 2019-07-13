import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './cards/CardReservas'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import {URLGRAPH} from '../constants'
import Loading from './Loading'
import axios from 'axios'

import { CssBaseline, Typography } from '@material-ui/core';

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
  titulo: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
    textAlign: "center"
  }

})

class Reservations extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      reservas: [],
      eventos: [],
      usuarios: [],
      cards: []
    }

  }

  async componentDidMount(){
    await this.cargarDatos();
    this.normalizarDatos();
    await this.setState( {isDataLoaded: true} );
  }

  async cargarDatos () {

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{getReservations{ id quantity id_user id_event}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getReservations
        let data2 = []

        for (let i = 0; i < data.length; i++){
          if (data[i].id_user === window.localStorage.getItem("idUser")){
            data2.push(data[i]);
          }
        }
        this.setState({
          reservas: data2
        })
      })
      .catch(err => console.log(err))

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{getEvents{ id name date location description}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getEvents

        this.setState({
          eventos: data
        })
      })
      .catch(err => console.log(err)) 

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{getUsers{id uname surname}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getUsers

        this.setState({
          usuarios: data
        })
      })
      .catch(err => console.log(err)) 
  
  }

  async normalizarDatos () {

    let reservas = this.state.reservas;
    let usuarios = this.state.usuarios;
    let eventos = this.state.eventos;
    let newData = []
    let aux = []

    for (let i = 0; i < reservas.length; i++){
      for (let j = 0; j < usuarios.length; j++){
        if (reservas[i].id_user === usuarios[j].id){
          aux.push({id_reserva: reservas[i].id, id_event: reservas[i].id_event,
                    quantity: reservas[i].quantity, name: usuarios[j].uname + usuarios[j].surname})
        }
      }
    }

    for (let i = 0; i < aux.length; i++){
      for (let j = 0; j < eventos.length; j++){
        if (aux[i].id_event === eventos[j].id){
          newData.push({id_reserva: aux[i].id_reserva, name: aux[i].name,
                        quantity: aux[i].quantity, date: eventos[j].date,
                        descripcion: eventos[j].description, location: eventos[j].location,
                        name_event: eventos[j].name, button1: "Ver más", button2: "Eliminar"})
        }
      }
    }

    this.setState({
      cards: newData,
    })
  }

  render(){
    const { classes } = this.props;

    if( !this.state.isDataLoaded ){
      return <Loading/>
    }

    return(   
        <div className={classes.root}>
          <CssBaseline/>
          <Navbar/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}>
              <Container maxWidth="lg" direction="row" className={classes.container}>
                <Grid container spacing={2} direction="row" justify="flex-start" >
                    <Grid container direction="row" justify="center" alignContent="center" alignItems="center">
                      <Typography xs={12} variant="h4" className={classes.titulo}>
                        Aqui tiene todas sus reservaciones
                      </Typography>
                    </Grid>
                    {this.state.cards.map(card => {
                      return (
                        <Card key = {card.id_reserva} card={card}/>
                      )
                    })}
                </Grid>
              </Container> 
            </div>
          </main>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(Reservations));