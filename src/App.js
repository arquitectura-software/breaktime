import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';

import Navbar from './components/NavBar'
import Card from './components/Card'
import Loading from './components/Loading.js'
import TextField from './components/TextField'
import EventFilters from './components/EventFilters'

import './App.css'


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false
    };
    this.state = {
      cards: [
          {
            title: "Idiosincrasia --",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",
          },
          {
            title: "Te con los que sobran",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",
          },
          {
            title: "Baile bajo luna de sangre",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",
          },
          {
            title: "La paz se acabo, la musica continua",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",

          }
      ]
    }

  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
  }
  render(){
    
    if( !this.state.isDataLoaded ){
      return <Loading/>
    }
    // person = person
    // first person es para el objeto del component card y el segundo del arrow function
    let cards = this.state.cards.map(card => {
      return (        
        <Grid item xs={12} sm={12}><Card card={card}/></Grid>      
      )
    })
    return(
      <Grid>
        <Navbar/>
        <Grid container>
          <Grid item xs={4} sm={3}><Container><EventFilters/></Container></Grid>
          <Grid container xs={7} sm={8} spacing={2}>{cards}</Grid>
          <Grid item xs={0} sm={2}></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;