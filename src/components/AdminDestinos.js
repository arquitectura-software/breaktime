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
import {URLGRAPH} from '../constants'
import axios from 'axios'

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
      data: {"query":"query{ getDestinations{ id name weather description timezone landingtime boardingtime } }","variables":null}
    })
      .then((result) => {
        let data = result.data.data.getDestinations

        this.setState({
          cards: data
        })
        console.log(this.state.cards)
      })
      .catch(err => console.log(err))
  }

  async formatDatos () {
    console.log(this.state.cards)
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

    let cards = this.state.cards.map(card => {
      return (       
          <Card key={card.id} card={card}>
          </Card>
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
                <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
                  {cards}
                </Grid>
              </Container>
              <Link to="/crear_destino">
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