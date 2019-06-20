import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    media: {
        paddingTop: '25.25%', // 16:9
    },
    text: {
      marginTop: "1em"
    }
})

class CardDestinos extends Component {

  
  render() {

    const { classes } = this.props;

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card >
          <CardActionArea>
            <CardMedia className={classes.media} 
            image="http://primicia.com.co/wp-content/uploads/2019/02/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg" 
            title="Cartagena"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.card.name}
              </Typography>
              <Typography variant="h4" color="textSecondary" component="h4">
                {this.props.card.weather}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              {this.props.card.description.length >=50 ? this.props.card.description.substring(0,250)+"..." : this.props.card.description}
              </Typography>
              
              <Grid item xs={12} >
                  <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
                      Hora de Desembarque: {this.props.card.landingtime}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
                      Hora de embarque: {this.props.card.boardingtime}
                  </Typography>
              </Grid>
              
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(CardDestinos));