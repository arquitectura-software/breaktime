import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import DialogEliminar from '../dialogs/DialogEliminar';

const styles = theme => ({
    media: {
      paddingTop: '25.25%', // 16:9
    },

    description: {
      marginTop: "1em",
      marginBottom: "1em"
    }
  
})

class CardDestinos extends Component {

  constructor(props){
    super(props);  
    this.state = {
      dialogEliminar: false,
    } 
  }

  handleClickButton1 = () => {    
    if(this.props.card.button1 === 'Reservar'){
      this.setState({
        dialogReservar: true
      })
    }else{
        this.props.history.push("/editar_destino");      
    }
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
          <CardMedia className={classes.media} 
          image="http://primicia.com.co/wp-content/uploads/2019/02/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg" 
          title="Cartagena"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.card.name}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="h4">
              {this.props.card.weather}
            </Typography>
            <Typography variant="body2" align="justify" color="textSecondary" className={classes.description} component="p">
              {this.props.card.description.length >=50 ? this.props.card.description.substring(0,250)+"..." : this.props.card.description}
            </Typography>
            
            <Grid item xs={12} >
              <Typography variant="body2" color="textPrimary" component="p">
                  Hora de Desembarque: {this.props.card.landingtime}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                  Hora de embarque: {this.props.card.boardingtime}
              </Typography>
            </Grid>  
          </CardContent>
          <CardActions>
            <Grid container justify="flex-end">
              <Button onClick={this.handleClickButton1} size="medium" color="primary">Editar</Button>            
              <Button onClick={this.handleClickButton2} size="medium" color="primary">Eliminar</Button>
            </Grid>      
          </CardActions>  
      </Card>
      <DialogEliminar open={this.state.dialogEliminar} onClose={this.handleCloseEliminar} card={this.props.card}/>
    </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(CardDestinos));