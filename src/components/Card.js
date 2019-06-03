import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import DialogVerMas from './DialogVerMas'

class MediaCard extends Component {

  constructor(props){
    super(props);  
    this.state = {
      dialogVerMas: false
    } 
  }

  handleClose = () => {
    this.setState({
      dialogVerMas: false,
    })
  }

  handleClickOpen = () => {
    this.setState({
      dialogVerMas: true
    })
  }
  
  render() {
    
    return (
      <Grid item xs={12} sm={12} spacing={2} key={this.props.card.id}>
        <Card>
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
            <Button size="small" color="primary">Reservar</Button>            
            <Button onClick={this.handleClickOpen} size="small" color="primary">Ver más</Button>
          </CardActions>
        </Card>

        <DialogVerMas open={this.state.dialogVerMas} onClose={this.handleClose}/>

      </Grid>
    );
  }
}


export default MediaCard;