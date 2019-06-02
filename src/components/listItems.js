import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import EventIcon from '@material-ui/icons/Event';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import RoomIcon from '@material-ui/icons/Room'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArtTrackIcon from '@material-ui/icons/ArtTrack'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ArtTrackIcon />
      </ListItemIcon>
      <ListItemText primary="Eventos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Administrador" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <ListItemText primary="Destinos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Promociones" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservaciones" />
    </ListItem>
  </div>
);

