import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Card from './cards/CardDestinosAdmin'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import Fab from '@material-ui/core/Fab';
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


class AdminDestinos extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
    };

    this.state = {
      cards: [
        {
          nombre: "Cartagena",
          clima: "30 °C",
          descripcion: "Descripción de la ciudad",
          horarioDesembarque: "12:30",
          horarioEmbarque: "8:00"
        },
        {
          nombre: "Cartagena",
          clima: "30 °C",
          descripcion: "Reservar",
          horarioDesembarque: "Ver más",
          horarioEmbarque: "9:00"
        },
        {
          nombre: "Cartagena",
          clima: "30 °C",
          descripcion: "Reservar",
          horarioDesembarque: "Ver más",
          horarioEmbarque: ""
        },
        {
          nombre: "Cartagena",
          clima: "30 °C",
          descripcion: "Reservar",
          horarioDesembarque: "Ver más",
          horarioEmbarque: ""
        },
      ]
    }
  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
  }

  render(){

    let cards = this.state.cards.map(card => {
      return (        
        <Grid item xs={12} sm={6} md={4}>
          <Card card={card}>
          </Card>
        </Grid>      
      )
    })

    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <CssBaseline/> 
        <BarraAdmin/>

      <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
              <Container maxWidth="lg" direction="row" className={classes.container}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                  <Grid container xs={12} sm={12} item={true} spacing={2}>{cards}</Grid>
                </Grid>
              </Container>
              <Link className={classes.textoButton} to="/crear_destino">
              <Fab color="primary" size="large" aria-label="Add" className={classes.fab}>
                <AddIcon />            
              </Fab>
              </Link>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminDestinos));