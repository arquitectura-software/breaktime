import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './cards/CardEventos'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import {URLGRAPH} from '../constants'
import axios from 'axios'

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';


import auth from './auth'
var wtf8 = require('wtf-8');

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
  formControl: {
    margin: theme.spacing(2),
  },
  labelPublico: {
    marginBottom: '1em',
    marginTop: '2em'
  },

})

class Events extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      cards: [],
      // clasificacion
      publico:{
        niños: false,
        adultos: false,
        familia: false,
      },
      tipo: {
        beneficencia: false,
        teatros: false,
        bailes: false,
        pilates: false,
        zumba: false,
        yoga: false,
      },
      
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.cargarDatos();
  }

  async cargarDatos () {

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{  getEvents{id name location date capacity audence description tipo}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getEvents

        this.setState({
          cards: []
        })

        for (var i=0; i<data.length; i++){

          let fecha = data[i].date.substring(0,10) + " a las " + data[i].date.substring(12,16) + "."
          var button1 = "Reservar"
          var button2 = "Ver más"

          data[i]["button1"] = button1;
          data[i]["button2"] = button2;
          data[i].date = fecha;

          this.setState({
            cards: this.state.cards.concat(data[i])
          })
        }
      })
      .catch(err => console.log(err))
  }

  async handleChange(event){
    let name = event.target.value;
    let publico = this.state.publico
    let tipo = this.state.tipo

    if (!(this.state.publico[name] === undefined)) {
      let pb = this.state.publico;
      console.log("not undifined")
      pb[name] = !this.state.publico[name];
      await this.setState({ [publico]: pb });
    }
    else {
      let ty = this.state.tipo;
      ty[name] = !this.state.tipo[name];
      await this.setState({ [tipo]: ty });
    }
    //await this.setState({ ...this.state, [name]: event.target.checked });
    //let {niños, adultos, adultosm, conciertos, teatros, bailes, pilates, zumba, yoga} = this.state;
    //console.log(niños, adultos, adultosm, conciertos, teatros, bailes, pilates, zumba, yoga)
  };
  render(){

    const { classes } = this.props;
    let publicoC = this.state.publico;
    let tipoC = this.state.tipo;
    let publicoB = [];
    let tipoB = [];

    publicoB.push(publicoC.niños);
    publicoB.push(publicoC.adultos);
    publicoB.push(publicoC.familia);

    
    tipoB.push(tipoC.beneficencia);
    tipoB.push(tipoC.teatros);
    tipoB.push(tipoC.bailes);
    tipoB.push(tipoC.pilates);
    tipoB.push(tipoC.zumba);
    tipoB.push(tipoC.yoga);

    let card2 = this.state.cards.map(card => {

      if (publicoB.includes(true) && tipoB.includes(true)) {
        console.log("Tipos & Publico")
        if (!this.state.publico.niños && !this.state.publico.adultos && !this.state.publico.familia) {
          return (
            <Card key={card.id} card={card} />
          )
        }
        if (this.state.publico[card.audence] === true && this.state.tipo[card.tipo] === true) {
          return (
            <Card key={card.id} card={card} />
          )
        }
      }

      else if (publicoB.includes(true)) {
        console.log("Solo publico");
        if (!this.state.publico.niños && !this.state.publico.adultos && !this.state.publico.familia) {
          return (
            <Card key={card.id} card={card} />
          )
        }
        if (this.state.publico[card.audence] === true) {
          console.log("Entra al menos aqui");
          return (
            <Card key={card.id} card={card} />
          )
        }

      }
      else if (tipoB.includes(true)) {
        console.log("Solo tipo");
        if (!this.state.tipo.diversion && !this.state.tipo.beneficencia && !this.state.tipo.relajacion && !this.state.tipo.acondicionamiento && !this.state.tipo.entretenimiento) {
          return (
            <Card key={card.id} card={card} />
          )
        }
        if (this.state.tipo[card.tipo] === true) {
          return (
            <Card key={card.id} card={card} />
          )
        }
      }
      return (
        <Card key={card.id} card={card} /> //Check for bugs (Cambio warning).
      )

    });

    return(
        <div className={classes.root}>
          <CssBaseline/>
          <Navbar/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}>
              <Container maxWidth="lg" direction="row" className={classes.container}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12} sm={4} md={3}><Container>


                  <Grid container direction="column">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.labelPublico}>Tipo de público</FormLabel>
        <Divider></Divider>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={this.state.publico.niños} onChange={this.handleChange} value="niños" />}
            label="Niños"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.publico.adultos} onChange={this.handleChange} value="adultos" />}
            label="Adultos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.publico.adultosm} onChange={this.handleChange} value="adultosm" />
            }
            label="Adultos mayores"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <Divider></Divider>
        <FormLabel component="legend" className={classes.labelPublico}>Tipo de evento</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={this.state.tipo.beneficencia} onChange={this.handleChange} value="beneficencia" />}
            label="Beneficiencia"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.tipo.teatros} onChange={this.handleChange} value="teatros" />}
            label="Teatros"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.tipo.bailes} onChange={this.handleChange} value="bailes" />
            }
            label="Bailes"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.tipo.pilates} onChange={this.handleChange} value="pilates" />}
            label="Pilates"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.tipo.umba} onChange={this.handleChange} value="zumba" />}
            label="Zumba"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.tipo.yoga} onChange={this.handleChange} value="yoga" />
            }
            label="Yoga"
          />
        </FormGroup>
        <FormHelperText>¡Disfrute de su estadía!</FormHelperText>
      </FormControl>
    </Grid>




                  </Container></Grid>
                  <Grid container xs={12} sm={8} md={9} item={true} spacing={2}>
                    {card2}
                  </Grid>
                </Grid>
              </Container>
            </div>
          </main>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(Events));