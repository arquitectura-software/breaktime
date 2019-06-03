import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    media: {
        paddingTop: '25.25%', // 16:9
    },
  
})

class CardDestinos extends Component {

  constructor(props){
    super(props);   
  }
  
  render() {

    const { classes } = this.props;

    return (
      <Card >
        <CardActionArea>
          <CardMedia className={classes.media} 
          image="http://primicia.com.co/wp-content/uploads/2019/02/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg" 
          title="Cartagena"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.card.nombre}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="h4">
              {this.props.card.clima}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.card.descripcion}
            </Typography>
            
            <Grid item xs={12} >
                <Typography variant="body2" color="textSecondary" component="p">
                    Hora de Desembarque: {this.props.card.horarioDesembarque}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Hora de embarque: {this.props.card.horarioEmbarque}
                </Typography>
            </Grid>
            
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withRouter(withStyles(styles)(CardDestinos));