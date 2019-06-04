import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
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

class DialogReservar extends Component{
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
                        Para realizar una reserva por favor complete los siguientes datos.
                    </DialogContentText>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink>
                            Numero de reservas
                        </InputLabel>
                        <NativeSelect value={this.state.cantidad} onChange={event => this.handleChange(event.target.value)}
                            input={<Input name="cantidad"/>}>
                            <option value={1}>Uno</option>
                            <option value={2}>Dos</option>
                            <option value={3}>Tres</option>
                            <option value={4}>Cuatro</option>
                            <option value={5}>Cinco</option>
                            <option value={6}>Seis</option>
                        </NativeSelect>
                    </FormControl>
                </DialogContent>

                <DialogActions>
                    <Button color="primary">
                        Reservar
                    </Button>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withRouter(withStyles(styles)(DialogReservar));