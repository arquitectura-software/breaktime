import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import AdminEventosForm from './AdminEventosForm';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';

const styles = theme => ({
  
  root: {
    display: 'flex',
    flex: '1',
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
    margin: '10vh',
    overflow: 'auto',
  },
});


class AdminEventosNew extends Component{
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
      <Grid className={classes.appBarSpacer} />
      <Grid container xs={12} justify="center" alignItems="center">
      <Grid container xs={8} justify="center" alignItems="center">
            <Card>
              <CardContent> 
                <AdminEventosForm/>
                  </CardContent> 
            </Card>
            </Grid>
            </Grid>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminEventosNew));