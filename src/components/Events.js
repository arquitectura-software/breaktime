import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';
import Navbar from './NavBar'
import Card from './Card'
import Loading from './Loading'
import EventFilters from './EventFilters'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
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
    height: '100vh',
  },
  columna: {
    direction: 'row',
  },

})

class Events extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      cards: [
          {
            id: 1,
            title: "Idiosincrasia --",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",
          },
          {
            id: 2,
            title: "Te con los que sobran",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",
          },
          {
            id: 3,
            title: "Baile bajo luna de sangre",
            description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem",
            option1: "Reservar",
            option2: "Ver más",
          },
          {
            id: 4,
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
    
    const { classes } = this.props;
    
    if( !this.state.isDataLoaded ){
      return <Loading/>
    }

    return(   
        <div className={classes.root}>
          <CssBaseline/>
          <Navbar/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}>
              <Container maxWidth="lg" direction="row" className={classes.container}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12} sm={4} md={3}><Container><EventFilters/></Container></Grid>
                  <Grid container xs={12} sm={8} md={9} spacing={2}>
                    {this.state.cards.map(card => {
                      return (
                        <Card card={card}/>
                      )
                    })}
                  </Grid>
                </Grid>
              </Container>
            </div>
          </main>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(Events));