import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'
//Routes
import Login from './components/Login'
import Events from './components/Events'
import Admin from './components/Admin'
import Diary from './components/Diary'
import Promos from './components/Promos'
import Reservations from './components/Reservations'

import Home from './Home';


export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />

            <Route exact path="/events" component={Events} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Diary" component={Diary} />
            <Route exact path="/Promos" component={Promos} />
            <Route exact path="/Reservations" component={Reservations} />


        </Switch>
      </ScrollToTop>
    </HashRouter>
  )