import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid' 
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import DialogReservar from '../DialogReservar';
import DialogEliminar from '../DialogEliminar';
import DialogVerMas from '../DialogVerMas'

const styles = theme => ({
  texto: {
    marginTop: "1em",
  },
  descripcion: {
    marginTop: "1em",
    marginBottom: "1em"
  }
})


class CardPromos extends Component {

  constructor(props){
    super(props);  
    this.state = {
      dialogVerMas: false,
      dialogReservar: false
    } 
  }

  handleCloseEliminar = () => {
    this.setState({
      dialogEliminar: false,
    })
  }

  handleCloseVerMas = () => {
    this.setState({
      dialogVerMas: false,
    })
  }

  handleCloseReservar = () => {
    this.setState({
      dialogReservar: false,
    })
  }

  handleClickOpenVerMas = () => {
    this.setState({
      dialogVerMas: true
    })
  }
  
  handleClickOpenReservar = () => {
    this.setState({
      dialogReservar: true
    })
  }


  handleClickButton1 = () => {    
    if(this.props.card.button1 === 'Reservar'){
      this.setState({
        dialogReservar: true
      })
    }else{
        this.props.history.push("/editar_promo");      
    }

  }
  
  handleClickButton2 = () => {
    if(this.props.card.button2 === 'Ver más'){
      this.setState({
        dialogVerMas: true
      })
    }else{
      this.setState({
        dialogEliminar: true
      })      
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={6} spacing={2} key={this.props.card.id}>
        <Card>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                {this.props.card.nombreTienda}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.descripcion}>
                {this.props.card.description.length >=50 ? this.props.card.description.substring(0,250)+"..." : this.props.card.description}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h2">
                Inicia: {this.props.card.fechaInicio}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h2">
                Finaliza: {this.props.card.fechaFin}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h2">
                Ubicada en {this.props.card.ubicacion}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={this.handleClickButton1} size="small" color="primary">{this.props.card.button1}</Button>            
            <Button onClick={this.handleClickButton2} size="small" color="primary">{this.props.card.button2}</Button>
          </CardActions>
        </Card>

        <DialogVerMas open={this.state.dialogVerMas} onClose={this.handleCloseVerMas} card={this.props.card}/>
        <DialogReservar open={this.state.dialogReservar} onClose={this.handleCloseReservar} card={this.props.card}/><DialogEliminar open={this.state.dialogEliminar} onClose={this.handleCloseEliminar} card={this.props.card}/>
        <DialogEliminar open={this.state.dialogEliminar} onClose={this.handleCloseEliminar} card={this.props.card}/>
      
      </Grid>
    );
  }
}


export default withRouter(withStyles(styles)(CardPromos));