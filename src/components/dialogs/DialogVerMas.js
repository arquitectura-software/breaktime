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

class DialogVerMas extends Component{

    render(){
        const {open, onClose, card} = this.props;
        const { classes } = this.props;

        return(         
                <Dialog open={open} onClose={onClose} scroll='paper' aria-labelledby="scroll-dialog-title">
                    
                    <DialogTitle id="scroll-dialog-title">
                        {card.title}
                    </DialogTitle>
                   
                    <DialogContent >
                        <Typography gutterBottom variant="subtitle1" component="h2" className={classes.texto}>
                            {this.props.card.tipo}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="h2" className={classes.texto}>
                            Fecha y hora: {this.props.card.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.descripcion}>
                            {this.props.card.description}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="h2" className={classes.texto}>
                            Lugar: {this.props.card.ubicacion}
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

export default withRouter(withStyles(styles)(DialogVerMas));