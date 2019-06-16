import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './cards/CardEventos'
import EventFilters from './EventFilters'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { CssBaseline } from '@material-ui/core';

const URLGRAPH = 'http://18.215.44.198:5000/graphql';

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
      cards: []
    }
  }

  componentDidMount(){
    this.cargarDatos();

  }

  async cargarDatos () {
    //e.preventDefault();

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

          var button1 = "Reservar"
          var button2 = "Ver más"
          data[i]["button1"] = button1;
          data[i]["button2"] = button2;

          this.setState({
            cards: this.state.cards.concat(data[i])
          })
        }
      })
      .catch(err => console.log(err))
  }

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
                  <Grid item xs={12} sm={4} md={3}><Container><EventFilters/></Container></Grid>
                  <Grid container xs={12} sm={8} md={9} spacing={2}>
                    {this.state.cards.map(card => {
                      return (
                        <Card card={card}/>
                      )
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