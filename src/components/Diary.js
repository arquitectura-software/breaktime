import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './cards/CardDestinos'
import Loading from './Loading'
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

class Diary extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDataLoaded: false,
      cards: []
    }
  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
    await this.cargarDatos();
    this.formatDatos();
  }

  async cargarDatos () {

    await axios({
      url: URLGRAPH,
      method: 'post',
      data: {"query":"query{ getDestinations{ id name weather description timezone landingtime boardingtime cityimage}}","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getDestinations

        this.setState({
          cards: data
        })
      })
      .catch(err => console.log(err))

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
        <Card key={card.id} card={card}/> 
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
                  <Grid container xs={12} sm={12} item={true} spacing={2}>{cards}</Grid>
                </Grid>
              </Container> 
            </div>
          </main>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(Diary));