import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { Link, withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import Card from './cards/CardUsersAdmin'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {URLGRAPH} from '../constants'
import axios from 'axios'
import utf8 from 'utf8'


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


class AdminUsuarios extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      usuarios: [],
      passengers: [],
      usuariosFusion: [],
    };
    this.cargarDatos = this.cargarDatos.bind(this);
    this.normalizarDatos = this.normalizarDatos.bind(this);
    this.decodificarDatos = this.decodificarDatos.bind(this);

  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
    await this.cargarDatos();
    await this.normalizarDatos();
    await this.decodificarDatos();
  }

  async decodificarDatos(){

    let decodedCards =[]

    for(let i = 0; i < this.state.usuariosFusion.length; i++){
      let auxCard = this.state.usuariosFusion[i]
      for(let j in auxCard){
        auxCard.j= utf8.decode(auxCard[j]);
      }
      decodedCards.push(auxCard);
    }
    await this.setState({ usuariosFusion: decodedCards})
  }
  async normalizarDatos () {

    let usuarios1 = this.state.usuarios
    let pasajeros1 = this.state.passengers
    let nuevosUsuarios = []

    for (let i = 0; i < pasajeros1.length; i++) {
      for (let j = 0; j < usuarios1.length; j++) {
        if(pasajeros1[i].id_user === usuarios1[j].id){
            nuevosUsuarios.push({names: usuarios1[j].uname, surnames: usuarios1[j].surname,
                                  id: usuarios1[j].id, birthdate: pasajeros1[i].birthdate,
                                  email: pasajeros1[i].email, phone: pasajeros1[i].phone})
        }
      }
    }

    this.setState({
      usuariosFusion: nuevosUsuarios,
    })
  }

  async cargarDatos () {

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{ getUsers{id uname surname}}","variables":null},
      })
      .then((result) => {
        let data = result.data.data.getUsers

        this.setState({
          usuarios: data,
        })
      })
      .catch(err => console.log(err))


    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{ getPassengers{ id id_user birthdate email phone } }","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getPassengers

        this.setState({
          passengers: data,
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <CssBaseline/>
        <BarraAdmin/>
      <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" direction="row" className={classes.container}>
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
                {this.state.usuariosFusion.map(usuario => {
                  return (
                    <Card key={usuario.id} usuario={usuario} />
                  )
                })}
            </Grid>
          </Container>
          <Link className={classes.textoButton} to="/crear_usuario">
              <Fab color="primary" size="large" aria-label="Add" className={classes.fab}>
                <AddIcon />
              </Fab>
              </Link>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminUsuarios));