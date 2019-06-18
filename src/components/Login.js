import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import LinkUI from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

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

})


class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      hash: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendReq = this.sendReq.bind(this);
  }

  handleInputChange(event){

    const target = event.target;

    if (target.name === "username"){
      this.setState({
        username: target.value
      })
    }
    else if (target.name === "password"){
      this.setState({
        password: target.value
      })
    }      
    }

  sendReq(event){
    event.preventDefault();
    console.log(this.state.username);
    var md5 = require('md5');

    if(this.state.password != null){
      console.log(this.state.password)
      let hash = md5(this.state.password)
      console.log(hash)

      this.setState({
        hash: hash
      })

    }
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
                <Link to="/events" className={classes.submit}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.sendReq}>
                    Iniciar sesión                    
                  </Button>
                  </Link>

                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <a href="https://github.com/Nigogu" variant="body2">
                      {"¿No puede ingresar? ¡Podemos ayudarle!"}
                    </a>
                  </Grid>
                </Grid>
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