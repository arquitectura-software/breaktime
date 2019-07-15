import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Card from './cards/CardEventos';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import {URLGRAPH} from '../constants';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';
import Loading from './Loading';
import utf8 from 'utf8';


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

  appBarSpacer: {
    marginBottom: theme.spacing(12)
  },

  fab: {
    marginRight: "1em",
    top: 'auto',
    right: '1em',
    bottom: '1em',
    left: 'auto',
    position: 'fixed',
  },

  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});


class AdminEventos extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      cards: [],
      publico: {
        niños: false,
        familia: false,
        adultos: false
      },
      tipo: {
        diversion: false,
        beneficencia: false,
        relajacion: false,
        acondicionamiento: false,
        entretenimiento: false
      }
 /*      niños: false,
      familia: false,
      adultos: false,
      diversion: false,
      beneficencia: false,
      relajacion: false,
      acondicionamiento: false,
      entretenimiento: false */
    }
    this.handleChange = this.handleChange.bind(this)
  }
  //peticion axios para hacer las 4 operaciones CRUD usando GraphiQL

  async decodificarDatos(){
    let decodedCards =[]
    for(let i=0; i< this.state.cards.length;i++){
      let auxCard = this.state.cards[i]
      for(let j in auxCard){
        auxCard.j= utf8.decode(auxCard.j);
      }
      decodedCards.push(auxCard);
    }
    await this.setState({ cards: decodedCards})
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
          data[i].date = utf8.decode(fecha);
          console.log(data[i]["audence"])
          data[i]["audence"]= utf8.decode(data[i]["audence"])
          }
          switch(data[i].audence){
            case "Para toda la familia": data[i].audence = "familia";
            break;
            default:

                data[i].audence = utf8.decode(data[i].audence).toLowerCase();
          }
          data[i].tipo = utf8.decode(data[i].tipo).toLowerCase();
          this.setState({
            cards: this.state.cards.concat(data[i])
          })

        console.log(this.state.cards)
        this.setState({isDataLoaded: true})
      })
      .catch(err => console.log(err))
  }


  async componentDidMount(){
    await this.cargarDatos();
    await this.decodificarDatos();
    await this.setState( {isDataLoaded: true} );
  }

  async handleChange(event){
    if(this.state.isDataLoaded){
      let name = event.target.value;
      let publico = this.state.publico
      let tipo = this.state.tipo
      if (!(this.state.publico[name] === undefined)){
        let pb = this.state.publico;
        pb[name] = !this.state.publico[name];
        await this.setState({ [publico]: pb});
      }else{
        let ty = this.state.tipo;
        ty[name] = !this.state.tipo[name];
        await this.setState({ [tipo]: ty});

      }
      /* console.log("esta vaina da: ",utf8.decode("DiversiÃ³n"));
      console.log(this.state.publico);
      console.log(this.state.tipo); */
      //await this.setState({ ...this.state, [clase[name]]: event.target.checked});

    }
  };

  render(){
    if(!this.state.isDataLoaded){
      return(
        <Loading />
      )
    }
    let publicoC = this.state.publico;
    let tipoC = this.state.tipo;
    let publicoB = [];
    let tipoB = [];

    publicoB.push(publicoC.niños);
    publicoB.push(publicoC.adultos);
    publicoB.push(publicoC.familia);


    tipoB.push(tipoC.beneficencia);
    tipoB.push(tipoC.relajacion);
    tipoB.push(tipoC.diversion);
    tipoB.push(tipoC.acondicionamiento);
    tipoB.push(tipoC.entretenimiento);




    let card2 = this.state.cards.map(card =>{

      if (publicoB.includes(true) && tipoB.includes(true)){
        console.log("Tipos & Publico")
        if(!this.state.publico.niños && !this.state.publico.adultos && !this.state.publico.familia){
          return (
            <Card key={card.id_evento} card={card}/>
          )
        }
        if(this.state.publico[card.audence] === true && this.state.tipo[card.tipo] === true){
          return (
            <Card key={card.id_evento} card={card}/>
          )
        }
      }

      else if (publicoB.includes(true)){
        console.log("Solo publico");
        if(!this.state.publico.niños && !this.state.publico.adultos && !this.state.publico.familia){
          return (
            <Card key={card.id_evento} card={card}/>
          )
        }
        if(this.state.publico[card.audence] === true){
          console.log("Entra al menos aqui");
          return (
            <Card key={card.id_evento} card={card}/>
          )
        }

      }
      else if (tipoB.includes(true)){
        console.log("Solo tipo");
        if(!this.state.tipo.diversion && !this.state.tipo.beneficencia &&!this.state.tipo.relajacion && !this.state.tipo.acondicionamiento && !this.state.tipo.entretenimiento){
          return (
            <Card key={card.id_evento} card={card}/>
          )
        }
        if(this.state.tipo[card.tipo] === true){
          return (
            <Card key={card.id_evento} card={card}/>
          )
        }
      }

        return (
          <Card key={card.id_evento} card={card}/> //Check for bugs (Cambio warning).
        )



    });


    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <CssBaseline/>
        <BarraAdmin/>
      <main className={classes.content}>
            <div className={classes.appBarSpacer} />
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
            control={<Checkbox checked={this.state.publico.niños} onChange={this.handleChange} value="niños"/>}
            label="Niños"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.publico.familia} onChange={this.handleChange} value="familia"/>}
            label="Familia"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.adultos} onChange={this.handleChange} value="adultos"/>
            }
            label="Adultos"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <Divider></Divider>
        <FormLabel component="legend" className={classes.labelPublico}>Tipo de evento</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={this.state.diversion} onChange={this.handleChange} value="diversion" />}
            label="Diversión"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.beneficencia} onChange={this.handleChange} value="beneficencia" />}
            label="Beneficiencia"
          />
          <FormControlLabel
            control={
              <Checkbox checked={this.state.relajacion} onChange={this.handleChange} value="relajacion" />
            }
            label="Relajación"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.acondicionamiento} onChange={this.handleChange} value="acondicionamiento" />}
            label="Acondicionamiento"
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
              <Link className={classes.textoButton} to="/crear_evento">
              <Fab color="primary" size="large" aria-label="Add" className={classes.fab}>
                <AddIcon />
              </Fab>
              </Link>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminEventos));