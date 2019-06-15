import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'

//Routes
import Login from './components/Login'
import Events from './components/Events'
import Diary from './components/Diary'
import Promos from './components/Promos'
import Reservations from './components/Reservations'

import Admin from './components/Admin'
import AdminEventos from './components/AdminEventos'
import AdminPromociones from './components/AdminPromociones'
import AdminReservas from './components/AdminReservas'
import AdminUsuarios from './components/AdminUsuarios'
import AdminDestinos from './components/AdminDestinos'
import AdminTiendas from './components/AdminTiendas'

import Checkout from './components/Checkout'


export default props => (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/diary" component={Diary}/>
            <Route exact path="/promos" component={Promos}/>
            <Route exact path="/reservations" component={Reservations}/>

            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/admin_eventos" component={AdminEventos}/>
            <Route exact path="/admin_promociones" component={AdminPromociones}/>
            <Route exact path="/admin_reservas" component={AdminReservas}/>
            <Route exact path="/admin_destinos" component={AdminDestinos}/>
            <Route exact path="/admin_usuarios" component={AdminUsuarios}/>
            <Route exact path="/admin_tiendas" component={AdminTiendas}/>

            <Route exact path="/checkout" component={Checkout}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )