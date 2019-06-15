import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  texto: {
    marginTop: "1em",
  },
  descripcion: {
    marginTop: "1em",
    marginBottom: "1em"
  },
  formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
  }
})

class FormUsuarios extends Component {
  constructor(props){
    super(props);
    this.state = {
        tipo: "",
        tipopublico: "",
        capacidad: 200,
        fecha: "",
        ubicación: "",
    }
  }


    handleDateChange = date => {
      this.setState({
        date: date
      })
    }

    handleChange1 = tipo => {
      this.setState({
          tipo: tipo
      })
    }

    handleChange2 = tipopublico => {
      this.setState({
          tipopublico: tipopublico
      })
    }

    handleChange3 = fecha => {
      this.setState({
          fecha: fecha
      })
    }

    handleChange4 = ubicación => {
      this.setState({
          ubicación: ubicación
      })
    }

    handleChange5 = capacidad => {
      this.setState({
          capacidad: capacidad
      })
    }

    render(){
      const { classes } = this.props;
      return (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Editar evento
          </Typography>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Username"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Username"
                type="password"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombres"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Contraseña"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
                id="address2"
                name="address2"
                type="number"
                onChange={event => this.handleChange5(event.target.value)}
                label="Identificación"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
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

                  <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Correo"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
                id="address2"
                name="address2"
                type="number"
                onChange={event => this.handleChange5(event.target.value)}
                label="Celular"
                fullWidth
              />
            </Grid>            
          </Grid>
        </React.Fragment>
      );

    }

}

export default withRouter(withStyles(styles)(FormUsuarios));
