import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Navbar from './components/NavBar'
import Buttons from './components/SpecialButtons'
import Card from './components/Card'
import Grid from '@material-ui/core/Grid' 

import './App.css'

class App extends Component{
  render(){
    
    return(
      <div>
        <Navbar/>
        <Buttons/>
        <Grid container  wrap="nowrap" spacing={2} >
          <Grid item xs={8} sm={6}> <Card/>  </Grid>
          <Grid item xs={8} sm={6}> <Card/> </Grid>
          <Grid item xs={8} sm={6}> <Card/> </Grid>        
        </Grid>
        <Grid container  wrap="nowrap" spacing={2} >
          <Grid item xs={8} sm={6}> <Card/>  </Grid>
          <Grid item xs={8} sm={6}> <Card/> </Grid>
          <Grid item xs={8} sm={6}> <Card/> </Grid>        
        </Grid>
      </div>
    );
  }
}

export default App;