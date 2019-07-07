import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Routes
import Login from './components/Login'
import Register from './components/Register'
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
import { ProtectedRouteAdmin } from './components/protectedRouteAdmin'


export default props => (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>  

            <ProtectedRoute path="/events" component={Events}/>
            <ProtectedRoute path="/diary" component={Diary}/>
            <ProtectedRoute path="/promos" component={Promos}/>
            <ProtectedRoute path="/reservations" component={Reservations}/>

            <ProtectedRouteAdmin exact path="/admin" component={Admin}/>
            <ProtectedRouteAdmin path="/admin_eventos" component={AdminEventos}/>
            <ProtectedRouteAdmin path="/admin_promociones" component={AdminPromociones}/>
            <ProtectedRouteAdmin path="/admin_reservas" component={AdminReservas}/>
            <ProtectedRouteAdmin path="/admin_destinos" component={AdminDestinos}/>
            <ProtectedRouteAdmin path="/admin_usuarios" component={AdminUsuarios}/>
            <ProtectedRouteAdmin path="/admin_tiendas" component={AdminTiendas}/>

            <ProtectedRouteAdmin path="/crear_evento" component={CheckoutEvents}/>
            <ProtectedRouteAdmin path="/crear_promo" component={CheckoutPromos}/>
            <ProtectedRouteAdmin path="/crear_reserva" component={CheckoutReservas}/>
            <ProtectedRouteAdmin path="/crear_destino" component={CheckoutDestinos}/>
            <ProtectedRouteAdmin path="/crear_usuario" component={CheckoutUsuarios}/>
            <ProtectedRouteAdmin path="/crear_tienda" component={CheckoutTiendas}/>

            <Route path="*" component={() => "404 NOT FOUND"} /> 

        </Switch>
  )