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
import { AdminRoute } from './components/adminRoute'




export default props => (
        <Switch>
            <Route exact path="/" component={Login}/> 

            <ProtectedRoute path="/events" component={Events}/>
            <ProtectedRoute path="/diary" component={Diary}/>
            <ProtectedRoute path="/promos" component={Promos}/>
            <ProtectedRoute path="/reservations" component={Reservations}/>

            <AdminRoute exact path="/admin" component={Admin}/>
            <AdminRoute path="/admin_eventos" component={AdminEventos}/>
            <AdminRoute path="/admin_promociones" component={AdminPromociones}/>
            <AdminRoute path="/admin_reservas" component={AdminReservas}/>
            <AdminRoute path="/admin_destinos" component={AdminDestinos}/>
            <AdminRoute path="/admin_usuarios" component={AdminUsuarios}/>
            <AdminRoute path="/admin_tiendas" component={AdminTiendas}/>

            <AdminRoute path="/crear_evento" component={CheckoutEvents}/>
            <AdminRoute path="/crear_promo" component={CheckoutPromos}/>
            <AdminRoute path="/crear_reserva" component={CheckoutReservas}/>
            <AdminRoute path="/crear_destino" component={CheckoutDestinos}/>
            <AdminRoute path="/crear_usuario" component={CheckoutUsuarios}/>
            <AdminRoute path="/crear_tienda" component={CheckoutTiendas}/>

            <Route path="*" component={() => "404 NOT FOUND"} /> 

        </Switch>
  )