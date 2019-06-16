import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BarraAdmin from './BarraAdmin'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import FormTiendas from './FormTiendas';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },

  appBarSpacer: {
      marginBottom: theme.spacing(12)
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

class CheckoutTiendas extends Component{

  render(){

    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <BarraAdmin /> 
        <div className={classes.appBarSpacer}/>
  
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            
            <FormTiendas />
              
              <React.Fragment>
                <div className={classes.buttons}>
                  
                  <Button className={classes.button}>
                    Cancelar
                  </Button>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Aceptar
                  </Button>
                </div>
              </React.Fragment>                          
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(CheckoutTiendas));