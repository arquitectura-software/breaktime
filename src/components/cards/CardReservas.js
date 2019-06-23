import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid' 
import DialogEliminar from '../dialogs/DialogEliminar';

const styles = theme => ({
  texto: {
    marginTop: "1em",
  },
  descripcion: {
    marginTop: "1em",
    marginBottom: "1em"
  }
})

class CardReservas extends Component {
  constructor(props){
    super(props);  
    this.state = {
      dialogEliminar: false,
    } 
  }

    handleClickButton1 = () => {
      this.props.history.push("/editar_reserva");
    }


    handleClickButton2 = () => {
        this.setState({
          dialogEliminar: true
        }) 
    }

    handleCloseEliminar = () => {
      this.setState({
        dialogEliminar: false,
      })
    }
  
  render() {

    const { classes } = this.props;

    return ( 
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>              
            <CardContent>
              <Typography gutterBottom variant="h5" color="secondary" component="h2" align="center">
                {this.props.card.name_event}
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="textSecondary" component="h2" className={classes.texto}>
                {this.props.card.descripcion}
              </Typography>
              <Typography variant="body2" component="p" className={classes.descripcion}>
                {this.props.card.quantity} reservas.
              </Typography>
              <Typography gutterBottom variant="body2" component="h2" className={classes.texto}>
                Para el: {this.props.card.date}
              </Typography>
              <Typography variant="body2"  component="p" className={classes.descripcion}>
                En: {this.props.card.location}
              </Typography>
              <Typography gutterBottom variant="body2" component="h2" className={classes.texto}>
                A nombre de: {this.props.card.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={this.handleClickButton1} size="small" color="primary">{this.props.card.button1}</Button>            
            <Button onClick={this.handleClickButton2} size="small" color="primary">{this.props.card.button2}</Button>
          </CardActions>
        </Card>
        <DialogEliminar open={this.state.dialogEliminar} onClose={this.handleCloseEliminar} card={this.props.card}/>
      </Grid>
    );
  }
}


export default withRouter(withStyles(styles)(CardReservas));