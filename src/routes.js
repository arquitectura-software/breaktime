import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'
//Routes
import Login from './components/Login'
import Reservation from './components/Reservation'
import Home from './Home';


export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/reservation" component={Reservation} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )