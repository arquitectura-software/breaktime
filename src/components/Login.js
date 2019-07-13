import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkUI from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';

import auth from './auth'

import {URLGRAPH} from '../constants'


let jwt = window.localStorage.getItem("token");


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Proyecto realizado para Arquitectura de Software mediante '}
      <LinkUI color="inherit" href="https://material-ui.com/">
        Material-UI
      </LinkUI>
      {'.'}
    </Typography>
  );
}

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

})

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      hash: '',
      token: '',
      isAuth: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendReq = this.sendReq.bind(this);
  }

  handleInputChange(event){

    const target = event.target;
    var md5 = require('md5');
    if (target.name === "username"){
      this.setState({
        username: target.value
      })
    }
    else if (target.name === "password"){
      this.setState({
        password: target.value,
        hash: md5(target.value)
        })
      }      
    }

  async sendReq() {
    const axios = require("axios")

    auth.login(() => {
      this.props.history.push("/events")
      }         
    )

    axios.post(URLGRAPH, {
      query : `mutation{
        loginUser(credentials: {
          email:"${this.state.username}",
          password:"${this.state.hash}"
        }){
          message
          token
        }
      }`
    }).then((result) => {
        jwt = result.data.data.loginUser      

        if(jwt.message === "Usuario  no autenticado."){
          this.sendReqAdmin()
        }else if(jwt.message === "Usuario autenticado."){
            window.localStorage.setItem("token", jwt.token.replace(/['"]+/g, ''))
            window.localStorage.setItem("user", this.state.username)

            axios.post(URLGRAPH, {
              query: `query{
                userByUsername(username: "${this.state.username}"){
                  id
                  uname
                  surname
                  email
                }
              }`
            }).then((result) => {
              let data = result.data.data.userByUsername
              window.localStorage.setItem("idUser", data.id);
            })
          
            auth.login(() => {
              this.props.history.push("/events")
              }         
            )          
        }
      })
      .catch(err => console.log(err))
    }

    handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        this.sendReq()
      }
    }
  
  
    async sendReqAdmin() {
      const axios = require("axios")
  
      axios.post(URLGRAPH, {
        query : `mutation{
          loginAdmin(credentials: {
            email:"${this.state.username}",
            password:"${this.state.hash}"
          }){
            message
            token
          }
        }`
      }).then((result) => {
          console.log(result)

          jwt = result.data.data.loginAdmin      
  
          if(jwt.message === "Usuario  no autenticado."){
            alert("Inicio de sesión incorrecto. Revise su usuario y contraseña.")
          }else if(jwt.message === "Admin autenticado."){
              window.localStorage.setItem("token", jwt.token.replace(/['"]+/g, ''))
              window.localStorage.setItem("user", this.state.username)
            
              auth.loginAdmin(() => {
                this.props.history.push("/admin")
                }         
              )          
          }
        })
        .catch(err => console.log(err))
      }


  render(){
    const { classes } = this.props;

    return(
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
          <Grid item xs={false} sm={7} md={8} className={classes.image} />
          <Grid item xs={12} sm={5} md={4} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Inicio de sesión
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="username"
                  id="username"
                  label="Usuario"
                  name="username"
                  autoFocus
                  onChange={this.handleInputChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onKeyPress={this.handleKeyPress}
                  type="password"
                  id="password"
                  label="Contraseña"
                  name="password"
                  onChange={this.handleInputChange}
                />              
                
                <Grid container justify="flex-end">
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recuérdame"
                  />
                </Grid>
                
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={this.sendReq}>
                    Iniciar sesión                    
                  </Button>


                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <a href="https://github.com/Nigogu" variant="body2">
                      {"¿No puede ingresar? ¡Podemos ayudarle!"}
                    </a>
                  </Grid>
                </Grid>

                <Link className={classes.textoButton} to="/Register">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>                    
                    Registro                  
                  </Button>
                  </Link>

                <Box mt={5}>
                  <MadeWithLove />
                </Box>


              </form>
            </div>
          </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Login));