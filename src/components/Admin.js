import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import HighlightOff from '@material-ui/icons/HighlightOff';

const styles = theme => ({
  
  root: {
    display: 'flex',
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
    position: 'relative'
  },

  fab: {
    margin: 0,
    top: 'auto',
    right: 'auto',
    bottom: '1em',
    left: '1em',
    position: 'fixed',
    BackgroundColor: "#2196f3"
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});


class Admin extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      
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
        <BarraAdmin/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Fab size="medium" variant="extended" aria-label="Delete" className={classes.fab}>
            <HighlightOff className={classes.extendedIcon} />
            Cerrar sesión
          </Fab>
        </main>        
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Admin));