import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    texto: {
      marginTop: "1em",
    },
    descripcion: {
      marginTop: "1em",
      marginBottom: "1em"
    }
})

class DialogVerMasPromos extends Component{

    render(){
        const {open, onClose, card} = this.props;
        const { classes } = this.props;

        return(         
                <Dialog open={open} onClose={onClose} scroll='paper' aria-labelledby="scroll-dialog-title">
                    
                    <DialogContent >
                        <Typography gutterBottom color="secondary" variant="h5" component="h2" align="center">
                            {this.props.card.nombre_tienda}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.descripcion}>
                            {this.props.card.categoria}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.descripcion}>
                            {this.props.card.descripcion}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="h2">
                            Ubicada en (piso-local): {this.props.card.ubicacion}
                        </Typography> 
                        <Typography gutterBottom variant="subtitle2" component="h2">
                            Inicia: {this.props.card.fecha_inicio}
                        </Typography> 
                        <Typography gutterBottom variant="subtitle2" component="h2">
                            Finaliza: {this.props.card.fecha_fin}
                        </Typography> 
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default withRouter(withStyles(styles)(DialogVerMasPromos));