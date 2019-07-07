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
      cards: [
          /* {
            id: 1,
            title: "Idiosincrasia --",
            date: "2019-05-20 14:00:00",
            tipo: "Tipo 1",
            ubicacion: "Piso 1",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            button1: "Editar",
            button2: "Eliminar",
          },
          {
            id: 2,
            title: "Té con los que sobran",
            date: "2019-05-20 14:00:00",
            tipo: "Tipo 2",
            ubicacion: "Piso 2",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            button1: "Editar",
            button2: "Eliminar",
          },
          {
            id: 3,
            title: "Baile bajo luna de sangre",
            date: "2019-05-20 14:00:00",
            tipo: "Tipo 3",
            ubicacion: "Piso 3",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            button1: "Editar",
            button2: "Eliminar",
          },
          {
            id: 4,
            title: "La paz se acabo, la musica continua",
            date: "2019-05-20 14:00:00",
            tipo: "Tipo 4",
            ubicacion: "Piso 4",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            button1: "Editar",
            button2: "Eliminar",
          }
       */]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  //peticion axios para hacer las 4 operaciones CRUD usando GraphiQL

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


  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
    await this.cargarDatos();
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