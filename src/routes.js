import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
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

import CheckoutPromos from './components/CheckoutPromos'
import CheckoutReservas from './components/CheckoutReservas'
import CheckoutUsuarios from './components/CheckoutUsuarios'
import CheckoutEvents from './components/CheckoutEvents'
import CheckoutDestinos from './components/CheckoutDestinos'
import CheckoutTiendas from './components/CheckoutTiendas'

import { ProtectedRoute } from './components/protectedRoute'



export default props => (
        <Switch>
            <Route exact path="/" component={Login}/> 

            <ProtectedRoute path="/events" component={Events}/>
            <Route path="/diary" component={Diary}/>
            <Route path="/promos" component={Promos}/>
            <Route path="/reservations" component={Reservations}/>

            <Route exact path="/admin" component={Admin}/>
            <Route path="/admin_eventos" component={AdminEventos}/>
            <Route path="/admin_promociones" component={AdminPromociones}/>
            <Route path="/admin_reservas" component={AdminReservas}/>
            <Route path="/admin_destinos" component={AdminDestinos}/>
            <Route path="/admin_usuarios" component={AdminUsuarios}/>
            <Route path="/admin_tiendas" component={AdminTiendas}/>

            <Route path="/crear_evento" component={CheckoutEvents}/>
            <Route path="/crear_promo" component={CheckoutPromos}/>
            <Route path="/crear_reserva" component={CheckoutReservas}/>
            <Route path="/crear_destino" component={CheckoutDestinos}/>
            <Route path="/crear_usuario" component={CheckoutUsuarios}/>
            <Route path="/crear_tienda" component={CheckoutTiendas}/>
            <Route path="*" component={() => "404 NOT FOUND"} /> 

        </Switch>
  )