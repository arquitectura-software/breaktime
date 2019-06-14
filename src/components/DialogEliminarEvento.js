import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    texto: {
      marginTop: "1em",
    },
    descripcion: {
      marginTop: "1em",
      marginBottom: "1em"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
})

class DialogEliminarEvento extends Component{
    constructor(props){
        super(props);
        this.state = {
            cantidad: ""
        }
    }

    handleChange = cantidad => {
        this.setState({
            cantidad: cantidad
        })
    }
    //onChange={handleChange('age')}
    render(){
        const {open, onClose, card} = this.props;
        const { classes } = this.props;

        return(         
            <Dialog maxWidth="xs" fullWidth={true} open={open} onClose={onClose} scroll='paper' aria-labelledby="scroll-dialog-title">
                
                <DialogTitle id="scroll-dialog-title">
                    {card.title}
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        ¿Está seguro que desea eliminar este evento?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button color="primary">
                        Eliminar
                    </Button>
                    <Button onClick={onClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withRouter(withStyles(styles)(DialogEliminarEvento));