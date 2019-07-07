import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { URLGRAPH } from '../../constants';

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
            cantidad: "1"
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendReq = this.sendReq.bind(this);
    }

    handleChange(event){
        event.preventDefault();

        this.setState({
            cantidad: event.target.value,
            unmount: false
        })
    }

    async sendReq(event){

        event.preventDefault();

        const axios = require("axios")
        axios.post(URLGRAPH, {
            query: `mutation{
                createReservation(reservation:{ 
                    id_user: 2 
                    id_event: 3 
                    quantity: ${this.state.cantidad}
                }){ 
                    id_event 
                    id_user 
                    quantity
                }}`
        }).then((result) => {
            let data = result.data.data.createReservation
            this.props.history.push("/reservations");
        })
        
    }
    
    render(){
        const {open, onClose, card} = this.props;
        const { classes } = this.props;

        
        return( 
            <Dialog maxWidth="xs" fullWidth={true} open={open} onClose={onClose} scroll='paper' aria-labelledby="scroll-dialog-title">
                
                <DialogTitle id="scroll-dialog-title">
                    {card.name}
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        Para realizar una reserva por favor complete los siguientes datos.
                    </DialogContentText>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink>
                            Numero de reservas
                        </InputLabel>
                        <NativeSelect value={this.state.cantidad} onChange={this.handleChange}
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
                    <Button onClick={this.sendReq} color="primary">
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