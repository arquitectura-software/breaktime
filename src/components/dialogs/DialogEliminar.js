import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom';

class DialogEliminar extends Component{
    constructor(props){
        super(props);
        this.state = {
            cantidad: "",
        }
    }

    handleChange = cantidad => {
        this.setState({
            cantidad: cantidad
        })
    }
    //onChange={handleChange('age')}
    render(){
        const {open = false, onClose = false } = this.props;

        return(         
            <Dialog maxWidth="xs" fullWidth={true} open={open} onClose={onClose} scroll='paper' aria-labelledby="scroll-dialog-title">
                <DialogTitle>
                    <DialogContentText>
                        ¿Está seguro que desea eliminar este elemento?
                    </DialogContentText>
                </DialogTitle>

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

export default withRouter(DialogEliminar);