import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import EventIcon from '@material-ui/icons/Event';
import StoreIcon from '@material-ui/icons/Store'
import RoomIcon from '@material-ui/icons/Room'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArtTrackIcon from '@material-ui/icons/ArtTrack'
import PersonIcon from '@material-ui/icons/Person'
import { withStyles } from '@material-ui/styles';


import { withRouter, Link } from "react-router-dom";

const styles = theme => ({
  texto: {
    color: '#464646',
    textDecorationLine: 'none',
  },
})

class ListItemsAdmin extends Component {

  render(){
    const { classes } = this.props;

    return(
      <div>
      <Link className={classes.texto} to="/admin_usuarios">
          <ListItem button >
            <ListItemIcon >
              <PersonIcon />
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Usuarios" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/admin_eventos">
          <ListItem button>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Eventos" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/admin_destinos">
          <ListItem button>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Destinos" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/admin_tiendas">
          <ListItem button>
            <ListItemIcon>
              <StoreIcon/>
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Tiendas" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/admin_promociones">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText  className={classes.texto} primary="Promociones" />
          </ListItem>
          </Link>

          <Link className={classes.texto} to="/admin_reservas">
          <ListItem button>
            <ListItemIcon>
              <EventIcon/>
            </ListItemIcon>
            <ListItemText className={classes.texto} primary="Reservas" />
          </ListItem>
          </Link>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(ListItemsAdmin))
