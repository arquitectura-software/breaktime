import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import EventIcon from '@material-ui/icons/Event';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import RoomIcon from '@material-ui/icons/Room'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArtTrackIcon from '@material-ui/icons/ArtTrack'

import { BrowserRouter, Route, Link } from "react-router-dom";

export const mainListItems = (
  <div>


    <Link to="/Events">
    <ListItem button>
      <ListItemIcon>
        <ArtTrackIcon />
      </ListItemIcon>
      <ListItemText primary="Eventos" />
    </ListItem>
    </Link>

    <Link to="/Admin">
    <ListItem button>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Administrador" />
    </ListItem>
    </Link>

    <Link to="/Diary">
    <ListItem button>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <ListItemText primary="Destinos" />
    </ListItem>
    </Link>

    <Link to="/Promos">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Promociones" />
    </ListItem>
    </Link>

    <Link to="/Reservations">
    <ListItem button>
      <ListItemIcon>
        <EventIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservaciones" />
    </ListItem>
    </Link>

  </div>
);

