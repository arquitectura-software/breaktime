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

function EventFilters() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    niños: true,
    adultos: true,
    adultosm: true,
    
    conciertos: true,
    teatros: true,
    bailes: true,
    pilates: true,
    zumba: true,
    yoga: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { niños, adultos, adultosm, conciertos, teatros, bailes, pilates, zumba, yoga } = state;

  return (
    <Grid container direction="column">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Tipo de público</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={niños} onChange={handleChange('niños')} value="niños" />}
            label="Niños"
          />
          <FormControlLabel
            control={<Checkbox checked={adultos} onChange={handleChange('adultos')} value="adultos" />}
            label="Adultos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={adultosm} onChange={handleChange('adultosm')} value="adultosm" />
            }
            label="Adultos mayores"
          />
        </FormGroup>
      </FormControl>


      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Tipo de evento</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={conciertos} onChange={handleChange('conciertos')} value="conciertos" />}
            label="Conciertos"
          />
          <FormControlLabel
            control={<Checkbox checked={teatros} onChange={handleChange('teatros')} value="teatros" />}
            label="Teatros"
          />
          <FormControlLabel
            control={
              <Checkbox checked={bailes} onChange={handleChange('bailes')} value="bailes" />
            }
            label="Bailes"
          />
          <FormControlLabel
            control={<Checkbox checked={pilates} onChange={handleChange('pilates')} value="pilates" />}
            label="Pilates"
          />
          <FormControlLabel
            control={<Checkbox checked={zumba} onChange={handleChange('zumba')} value="zumba" />}
            label="Zumba"
          />
          <FormControlLabel
            control={
              <Checkbox checked={yoga} onChange={handleChange('yoga')} value="yoga" />
            }
            label="Yoga"
          />
        </FormGroup>
        <FormHelperText>¡Disfrute de su estadía!</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default EventFilters;