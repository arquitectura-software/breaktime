import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';


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

class FormReservas extends Component {
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
      return (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Crear reserva
          </Typography>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Usuario que reservó"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
                  <InputLabel shrink>
                      Evento seleccionado
                  </InputLabel>
                  <NativeSelect fullWidth value={this.state.tipo} onChange={event => this.handleChange1(event.target.value)}
                      input={<Input name="tipo"/>}>
                      <option value={1}>Uno</option>
                      <option value={2}>Dos</option>
                      <option value={3}>Tres</option>
                      <option value={4}>Cuatro</option>
                      <option value={5}>Cinco</option>
                      <option value={6}>Seis</option>
                    </NativeSelect>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel shrink>
                      Cantidad de personas de la reserva
                  </InputLabel>
                  <NativeSelect fullWidth value={this.state.tipopublico} onChange={event => this.handleChange2(event.target.value)}
                      input={<Input name="tipopublico"/>}>
                      <option value={1}>Uno</option>
                      <option value={2}>Dos</option>
                      <option value={3}>Tres</option>
                      <option value={4}>Cuatro</option>
                      <option value={5}>Cinco</option>
                      <option value={6}>Seis</option>
                    </NativeSelect>
                  </Grid>
            
          </Grid>
        </React.Fragment>
      );

    }

}

export default withRouter(withStyles(styles)(FormReservas));
