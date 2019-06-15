import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { CssBaseline, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Card from './CardReservas'
import BarraAdmin from './BarraAdmin';

const styles = theme => ({
  
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
  },

  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    height: '100vh',
  },
  columna: {
    direction: 'row',
  },
  titulo: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
    textAlign: "center"
  }
});


class AdminReservas extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      cards: [
        {
          title: "Idiosincrasia --",
          description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
          button1: "Editar Reserva",
          button2: "Eliminar Reserva",
        },
        {
          title: "Te con los que sobran",
          description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
          button1: "Editar Reserva",
          button2: "Eliminar Reserva",
        },
        {
          title: "Baile bajo luna de sangre",
          description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
          button1: "Editar Reserva",
          button2: "Eliminar Reserva",
        },
        {
          title: "La paz se acabo, la musica continua",
          description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
          button1: "Editar Reserva",
          button2: "Eliminar Reserva",

        }
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
            <Container maxWidth="lg" direction="row" className={classes.container}>
                <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
                    <Grid container direction="row" justify="center" alignContent="center" alignItems="center">
                      <Typography xs={12} variant="h4" className={classes.titulo}>
                        Aqui tiene todas sus reservaciones
                      </Typography>
                    </Grid>
                    {this.state.cards.map(card => {
                      return (
                        <Card card={card}/>
                      )
                    })}
                </Grid>
              </Container>
            </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AdminReservas));