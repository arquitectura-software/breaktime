import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from "react-router-dom";

class CardReservas extends Component {

  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <Card >
        <CardActionArea>
          <CardMedia
            className="height: 70"
            image="../resources/universe.jpg"
            title="Universe"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" size="big" color="secondary">Ver más</Button>            
          <Button variant="contained" size="big" color="primary">Eliminar reserva</Button>
        </CardActions>
      </Card>
    );
  }
}


export default CardReservas;