import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Navbar from './components/NavBar'
import TextField from './components/TextField'

class Reservation extends Component {
    constructor(props) {
    }

    render() {
        return (
            <div>
                <Navbar />
                <Buttons />
                <Grid container wrap="nowrap" spacing={2} >
                    <Grid item xs={8} sm={3}></Grid>
                    <Grid item xs={8} sm={6}> <TextField /> </Grid>
                    <Grid item xs={8} sm={3}></Grid>
                </Grid>
            </div>
        );
    }
}


export default Reservation;