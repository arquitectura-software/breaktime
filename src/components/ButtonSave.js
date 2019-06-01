import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid' 
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3),
  },
  leftIcon: {
    marginRight: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(2),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconBig)} />
        Save
      </Button>
    </div>
  );
}

export default IconLabelButtons;