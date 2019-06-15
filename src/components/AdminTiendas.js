import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import BarraAdmin from './BarraAdmin';
import Card from './Cards/CardTiendasAdmin'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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


class AdminUsuarios extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      tiendas: [
        {
          id: 1,
          nombre: "Pull and Bear",
          ubicacion: "Piso 2 - 201",
          categoria: "Ropa",
        },

        {
          id: 2,
          nombre: "Elysium",
          ubicacion: "Piso 3 - 305",
          categoria: "Diversión",
        },

        {
          id: 3,
          nombre: "Bar de Moe",
          ubicacion: "Piso 3 - 302",
          categoria: "Bares",
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
                {this.state.tiendas.map(tienda => {
                  return (
                    <Card tiendas={tienda}/>
                  )
                })}
            </Grid>
          </Container>
          <Fab color="primary" size="large" aria-label="Add" className={classes.fab}>
            <AddIcon color="white"/>            
          </Fab>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminUsuarios));