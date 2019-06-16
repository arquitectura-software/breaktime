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

class CardTiendasAdmin extends Component {

    constructor(props){
        super(props);  
        this.state = {
          dialogEliminar: false,
        } 
      }


    handleClickButton1 = () => {
        this.props.history.push("/editar_tienda");
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

    return (
        <Grid item xs={12} sm={6} md={4} key={this.props.tiendas.id_tienda}>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="primary" align="center">
                        {this.props.tiendas.nombre}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="h4">
                        Ubicación: {this.props.tiendas.ubicacion}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Categoria: {this.props.tiendas.categoria}
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

export default withRouter(withStyles(styles)(CardTiendasAdmin));