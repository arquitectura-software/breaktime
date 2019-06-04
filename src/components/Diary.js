import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './CardDestinos'
import Loading from './Loading'
import EventFilters from './EventFilters'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

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

class Diary extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false
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
    const { classes } = this.props;

    if( !this.state.isDataLoaded ){
      return <Loading/>
    }
    // person = person
    // first person es para el objeto del component card y el segundo del arrow function
    let cards = this.state.cards.map(card => {
      return (        
        <Grid item xs={12} sm={6} md={4}><Card card={card}/></Grid>      
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
                  <Grid container xs={12} sm={12}  spacing={2}>{cards}</Grid>
                </Grid>
              </Container> 
            </div>
          </main>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(Diary));