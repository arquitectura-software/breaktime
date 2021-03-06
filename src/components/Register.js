import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import {URLGRAPH} from '../constants'

let jwt = window.localStorage.getItem("token");


const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://crucerator.com/buscador-todo-cruceros/wp-content/uploads/2016/06/Ofertas-para-grupos-en-cruceros-MSC.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecorationLine: 'none',
  },
  textoButton: {
    color: 'white',
    textDecorationLine: 'none',
  },
  spaceDate: {
    marginTop: theme.spacing(2)
  },

})


class Register extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      nombres: '',
      apellidos: '',
      id: '',
      correo: '',
      celular: '',
      fecha: '',
      password: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendReq = this.sendReq.bind(this);
  }

  
  async handleInputChange(event) {

    const target = event.target.id;
    const value = event.target.value;
    var md5 = require('md5');
    console.log("entry in Handle")
    
    if (target === "username") {
      console.log("entry in username")
      await this.setState({ username: value})
      console.log(this.state)
    }

    else if (target === "nombres") {
      await this.setState({ nombres: value})
      console.log(this.state)
    }

    else if (target === "apellidos") {
      await this.setState({ apellidos: value})
      console.log(this.state)
    }

    else if (target === "id") {
      await this.setState({ id: value})
      console.log(this.state)
    }

    else if (target === "correo") {
      await this.setState({ correo: value })
      console.log(this.state.correo)
    }

    else if (target === "celular") {
      await this.setState({ celular: value})
      console.log(this.state)
    }

    else if (target === "fecha") {
      await this.setState({ fecha: value })
      console.log(this.state)
    }

    else if (target === "password") {
      const hash = md5(value);
      await this.setState({ password: hash })
      console.log(this.state.password)
    }
  }
  
    async sendReq() {
      const axios = require("axios")
      console.log("entry to sendReq")
      
      console.log("this.state,: ",this.state)
      //console.log("this.state.nombres: ",this.state.nombres)
      //console.log("this.state.apellidos: ",this.state.apellidos)
      //console.log("this.state.email: ",this.state.correo)
      //console.log("this.state.password: ",this.state.password)
      
      // Crear un usuario en LDAP
      axios.post(URLGRAPH, { //Por revisar cuando esté desplegado.
        query : `mutation{
          createUserld(user: {
            uname:"${this.state.nombres}",
            surname:"${this.state.apellidos}",
            email:"${this.state.correo}",
            passw:"${this.state.password}",
          }){
            success
            data
          }
        }`
      }).then((result) => {
          
          jwt = result.data.data          
          console.log(jwt)
          if(jwt === "LDAP: usuario creado"){            
            alert("El usuario ha sido creado. Ahora puede proceder a realizar el inicio de sesión.")
            this.props.history.push("/")
          }else{                         
              alert("Ha ocurrido un error realizando el registro. Por favor contacte soporte.")         
          }
      }).catch(err => console.log(err))
      
      //Crear un usuario en la DB login
      axios.post(URLGRAPH, { //Por revisar cuando esté desplegado.
        query : `mutation{
          createUser(user: {
            uname:"${this.state.nombres}",
            surname:"${this.state.apellidos}",
            email:"${this.state.correo}",
            passw:"${this.state.password}",
          }){
            id
            uname
            surname
          }
        }`
      }).then((result) => {
          
          const res = result.data.uname          
          console.log(res)
          if(res != " "){            
            alert("El usuario ha sido creado. Ahora puede proceder a realizar el inicio de sesión.")
            this.props.history.push("/")
          }else{                         
              alert("Ha ocurrido un error realizando el registro. Por favor contacte soporte.")         
          }
      }).catch(err => console.log(err))
  }


  render(){
    const { classes } = this.props;

    return(
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
          <Grid item xs={12} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PersonAddIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Registro
              </Typography>
              <form className={classes.form} noValidate>

            <Grid container item spacing={3} xs={12} justify="center">
              <Grid item xs={12} sm={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  autoFocus
                  onChange={this.handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="nombres"
                  required
                  fullWidth
                  label="Nombres"
                  onChange={this.handleInputChange}
                />
              </Grid>


              <Grid item xs={12} sm={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="apellidos"
                  required
                  fullWidth
                  label="Apellidos"
                  onChange={this.handleInputChange}
                />
              </Grid>

             
              <Grid item xs={12} sm={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="correo"
                  required
                  fullWidth
                  label="Correo"
                  onChange={this.handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="password"
                    required
                    fullWidth
                    label="Contraseña"
                    type="password"
                    onChange={this.handleInputChange}
                  />
              </Grid>  
                <Grid item xs={12} sm={5}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="celular"
                    required
                    fullWidth
                    label="Celular"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} sm={5} className={classes.spaceDate}>
                  <TextField
                    fullWidth
                    id="fecha"
                    label="Fecha de nacimiento"
                    type="date"
                    defaultValue="2019-06-14"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                
                    
                  <Grid item xs={12} sm={5}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                      onClick={this.sendReq}>
                      Registrar usuario                    
                    </Button>
                  </Grid>
                  </Grid>
                    
              
              </form>
            </div>
          </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Register));