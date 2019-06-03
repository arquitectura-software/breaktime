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

const styles = theme => ({
  texto: {
    marginTop: "1em",
  },
  descripcion: {
    marginTop: "1em",
    marginBottom: "1em"
  }
})


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
                {this.props.card.title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2" className={classes.texto}>
                {this.props.card.tipo}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h2" className={classes.texto}>
                Fecha y hora: {this.props.card.date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.descripcion}>
                {this.props.card.description.length >=50 ? this.props.card.description.substring(0,250)+"..." : this.props.card.description}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h2" className={classes.texto}>
                Lugar: {this.props.card.ubicacion}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Reservar</Button>            
            <Button onClick={this.handleClickOpen} size="small" color="primary">Ver más</Button>
          </CardActions>
        </Card>

        <DialogVerMas open={this.state.dialogVerMas} onClose={this.handleClose} card={this.props.card}/>

      </Grid>
    );
  }
}


export default withRouter(withStyles(styles)(MediaCard));