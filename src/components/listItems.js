import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import EventIcon from '@material-ui/icons/Event';
import RoomIcon from '@material-ui/icons/Room'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArtTrackIcon from '@material-ui/icons/ArtTrack'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/styles';


import { withRouter, Link } from "react-router-dom";

const styles = theme => ({
  texto: {
    color: '#464646',
    textDecorationLine: 'none',
  },
})

class ListItems extends Component {

  render(){
    const { classes } = this.props;

    return(
      <div>
          <Link className={classes.texto} to="/events">
          <ListItem button>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Eventos" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/diary">
          <ListItem button>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Destinos" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/promos">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText  className={classes.texto} primary="Promociones" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/reservations">
          <ListItem button>
            <ListItemIcon>
              <EventIcon/>
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Reservaciones" />
          </ListItem>
          </Link>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(ListItems))
