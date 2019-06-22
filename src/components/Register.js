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
      password: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
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

            <Grid container spacing={3} xs={12} justify="center">
              <Grid item xs={12} sm={5}>
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
              </Grid>

              <Grid item xs={12} sm={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
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
                  required
                  fullWidth
                  label="Identificación"
                  onChange={this.handleInputChange}
                />
              </Grid>
                
              <Grid item xs={12} sm={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
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
                    onClick={this.hash}>
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