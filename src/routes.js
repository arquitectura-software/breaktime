import React from 'react'
import { Route, HashRouter, Switch, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'
//Routes
import Login from './components/Login'
import Events from './components/Events'
import Diary from './components/Diary'
import Promos from './components/Promos'
import Reservations from './components/Reservations'
import Admin from './components/Admin'
import Home from './Home';


export default props => (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/diary" component={Diary}/>
            <Route exact path="/promos" component={Promos}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/reservations" component={Reservations}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )