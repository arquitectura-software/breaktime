import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import Card from './Cards/CardUsersAdmin'

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

  appBarSpacer: {
    marginBottom: theme.spacing(12)
  },

  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});


class AdminUsuarios extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      usuarios: [
        {
          id: 1,
          username: "Alejosebasp",
          name: "Alejandro Sebastian Alejo Patarroyo",
          documento: "1030677408",
          correo: "alsalejopa@unal.edu.co",
          celular: "3213892239"
        },

        {
          id: 2,
          username: "Alejosebasp",
          name: "Alejandro Sebastian Alejo Patarroyo",
          documento: "1030677408",
          correo: "alsalejopa@unal.edu.co",
          celular: "3213892239"
        },

        {
          id: 3,
          username: "Alejosebasp",
          name: "Alejandro Sebastian Alejo Patarroyo",
          documento: "1030677408",
          correo: "alsalejopa@unal.edu.co",
          celular: "3213892239"
        },
      ]
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
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" direction="row" className={classes.container}>
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
                {this.state.usuarios.map(usuario => {
                  return (
                    <Card usuario={usuario}/>
                  )
                })}
            </Grid>
          </Container>

        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminUsuarios));