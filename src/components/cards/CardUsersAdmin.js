import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import DialogEliminar from '../DialogEliminar';

const styles = theme => ({
    media: {
        paddingTop: '25.25%', // 16:9
    },
})

class CardUsersAdmin extends Component {

    constructor(props){
        super(props);  
        this.state = {
          dialogEliminar: false,
        } 
      }

    handleClickButton1 = () => {
        this.props.history.push("/crear_usuario");    
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
        <Grid item xs={12} sm={6} md={6} spacing={2} key={this.props.usuario.id}>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="primary" align="center">
                        {this.props.usuario.username}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="h4">
                        Nombre: {this.props.usuario.name}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Documento: {this.props.usuario.documento}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Correo: {this.props.usuario.correo}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Celular: {this.props.usuario.celular}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={this.handleClickButton1} size="medium" color="primary">Editar</Button>            
                    <Button onClick={this.handleClickButton2} size="medium" color="primary">Eliminar</Button>
                </CardActions>
            </Card>
            <DialogEliminar open={this.state.dialogEliminar} onClose={this.handleCloseEliminar} card={this.props.card}/>
      
        </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(CardUsersAdmin));