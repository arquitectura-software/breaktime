import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Navbar from './components/NavBar'
import Buttons from './components/SpecialButtons'
import Card from './components/Card'
import Loading from './components/Loading.js';
import Grid from '@material-ui/core/Grid' 
import './App.css'
import TextField from './components/TextField'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false
    };
    this.state = {
      cards: [
          {
            title: "First Event",
            description: "La informacion del evento 1"
          },
          {
            title: "second Event",
            description: "La informacion del evento 2"
          },
          {
            title: "Next Event",
            description: "edteam comparte con esta gran comunidad"
          },
          {
            title: "Final Event",
            description: "edteam comparte con esta gran comunidad"
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
      <div>
        <Navbar/>
        <Buttons/>

        <Grid container  wrap="nowrap" spacing={2} >
        <Grid item xs={5} sm={4}></Grid> //Grid para los filtros
        <Grid container xs={7} sm={7} spacing={2}>{cards}</Grid>
        <Grid item xs={0} sm={1}></Grid>
        </Grid>

        <Grid container  wrap="nowrap" spacing={2} >
          <Grid item xs={1} sm={3}></Grid>
          <Grid item xs={10} sm={8}> <TextField/> </Grid>  
          <Grid item xs={1} sm={1}></Grid>        
        </Grid>
      </div>
    );
  }
}

export default App;