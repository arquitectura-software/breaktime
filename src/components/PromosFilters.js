import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid' 

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function PromosFilters() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    tecnología: true,
    ropahombre: true,
    ropamujer: true,
    ropaniños: true,
    cuidado: true,
    hogar: true,
    souvenirs: true,
    licores: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { tecnología, ropahombre, ropamujer, ropaniños, cuidado, hogar, souvenirs, licores } = state;

  return (
    <Grid container direction="column">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Ropa</FormLabel>
        <FormGroup>
          
          <FormControlLabel
            control={<Checkbox checked={ropahombre} onChange={handleChange('ropahombre')} value="ropahombre" />}
            label="Hombre"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ropamujer} onChange={handleChange('ropamujer')} value="ropamujer" />
            }
            label="Mujer"
          />
          <FormControlLabel
            control={<Checkbox checked={ropaniños} onChange={handleChange('ropaniños')} value="ropaniños" />}
            label="Niños"
          />
        </FormGroup>
      </FormControl>


      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Otros</FormLabel>
        <FormGroup>

        <FormControlLabel
            control={<Checkbox checked={tecnología} onChange={handleChange('tecnología')} value="tecnología" />}
            label="Tecnología"
          />
          
          <FormControlLabel
            control={<Checkbox checked={cuidado} onChange={handleChange('cuidado')} value="cuidado" />}
            label="Cuidado personal"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hogar} onChange={handleChange('hogar')} value="hogar" />
            }
            label="Hogar"
          />
          <FormControlLabel
            control={<Checkbox checked={souvenirs} onChange={handleChange('souvenirs')} value="souvenirs" />}
            label="Souvenirs"
          />
          <FormControlLabel
            control={<Checkbox checked={licores} onChange={handleChange('licores')} value="licores" />}
            label="Licores"
          />
          
        </FormGroup>
        <FormHelperText>¡Disfrute de su estadía!</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default PromosFilters;