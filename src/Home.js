import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './components/NavBar'
import Card from './components/Card'
import Loading from './components/Loading.js'
import EventFilters from './components/EventFilters'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button'

import { CssBaseline } from '@material-ui/core';

const styles = theme => ({
  
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#000000',
    overflow: 'hidden',
    backgroundImage: "url(" + "http://consejerosviajeros.com/wp-content/uploads/2015/10/1.Portada1-e1444214421337.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
  },

});

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false
    };
  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
  }
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
      <CssBaseline/> 
      <Navbar/>
      <main className={classes.content}>
            <div className={classes.appBarSpacer}>


            </div>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Home));