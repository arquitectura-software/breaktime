import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Login from './components/Login'
import Reservation from './components/Reservation'

import { BrowserRouter, Route, Link } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
                
        <Route path="/reservation" component={Reservation} />
        <Route exact path="/" exact component={App}/>
        <Route path="/login" component={Login} />
                
    </BrowserRouter>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
