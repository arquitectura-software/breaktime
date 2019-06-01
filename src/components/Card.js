import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class MediaCard extends Component {

  constructor(props){
    super(props);
    this.Width = "maxWidth: 400"
    
  }
  
  render() {
    return (
      <Card className={this.Width}>
        <CardActionArea>
          <CardMedia
            className="height: 70"
            image="./resources/universe.jpg"
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
          <Button size="small" color="primary">
            Reservar
        </Button>
          <Button size="small" color="primary">
            Ver más
        </Button>
        </CardActions>
      </Card>
    );
  }
}


export default MediaCard;