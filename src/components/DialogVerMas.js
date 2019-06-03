import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogVerMas extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const {open, onClose} = this.props;

        return(         
                <Dialog open={open} onClose={onClose} scroll='paper' aria-labelledby="scroll-dialog-title">
                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                    <DialogContent >
                    <DialogContentText>
                    {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button  color="primary">
                        Cancel
                    </Button>
                    <Button  color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default DialogVerMas;