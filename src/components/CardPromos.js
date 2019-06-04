import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid' 
import DialogVerMas from './DialogVerMas'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import DialogReservar from './DialogReservar';

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

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={6} spacing={2} key={this.props.card.id}>
        <Card>
          <CardActionArea>
            <CardMedia
              className="height: 70"
              image="../resources/universe.jpg"
              title="Universe"
            />
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
            <Button onClick={this.handleClickOpenReservar} variant="contained" size="small" color="primary">Activar Notificación</Button>            
            <Button onClick={this.handleClickOpenVerMas} size="small" color="primary">Ver más</Button>
          </CardActions>
        </Card>

        <DialogVerMas open={this.state.dialogVerMas} onClose={this.handleCloseVerMas} card={this.props.card}/>
        <DialogReservar open={this.state.dialogReservar} onClose={this.handleCloseReservar} card={this.props.card}/>
      </Grid>
    );
  }
}


export default withRouter(withStyles(styles)(CardPromos));