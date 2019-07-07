import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './cards/CardEventos'
//import EventFilters from './EventFilters'
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

class Events extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      cards: [],
      // clasificacion
      niños: true,
      adultos: true,
      adultosm: true,

      conciertos: true,
      teatros: true,
      bailes: true,
      pilates: true,
      zumba: true,
      yoga: true,
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
    await this.setState({ ...this.state, [name]: event.target.checked });
    let {niños, adultos, adultosm, conciertos, teatros, bailes, pilates, zumba, yoga} = this.state;
    console.log(niños, adultos, adultosm, conciertos, teatros, bailes, pilates, zumba, yoga)
  };
  render(){

    const { classes } = this.props;

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
        <FormLabel component="legend" className={classes.labelFiltro}>Filtros de busqueda</FormLabel>
        <Divider></Divider>
        <FormLabel component="legend" className={classes.labelPublico}>Tipo de público</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={this.state.niños} onChange={this.handleChange} value="niños" />}
            label="Niños"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.adultos} onChange={this.handleChange} value="adultos" />}
            label="Adultos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.adultosm} onChange={this.handleChange} value="adultosm" />
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
            control={<Checkbox checked={this.state.conciertos} onChange={this.handleChange} value="conciertos" />}
            label="Conciertos"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.teatros} onChange={this.handleChange} value="teatros" />}
            label="Teatros"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.bailes} onChange={this.handleChange} value="bailes" />
            }
            label="Bailes"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.pilates} onChange={this.handleChange} value="pilates" />}
            label="Pilates"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.zumba} onChange={this.handleChange} value="zumba" />}
            label="Zumba"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.yoga} onChange={this.handleChange} value="yoga" />
            }
            label="Yoga"
          />
        </FormGroup>
        <FormHelperText>¡Disfrute de su estadía!</FormHelperText>
      </FormControl>
    </Grid>




                  </Container></Grid>
                  <Grid container xs={12} sm={8} md={9} item={true} spacing={2}>
                    {this.state.cards.map(card => {
                      let {niños, adultos, adultosm, conciertos, teatros, bailes, pilates, zumba, yoga} = this.state;
                      if(!niños && !adultos && !adultosm && !conciertos && !teatros && !bailes && !pilates && !zumba && !yoga){
                        return (
                          <Card key={card.id} card={card}/>
                        )
                      }
                      if(this.state[card.audence] === true || this.state[card.tipo] === true){
                        return (
                          <Card key={card.id} card={card}/>
                        )
                      }
                    })}
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