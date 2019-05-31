import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

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
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      
      <Button variant="contained" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      
      <Button variant="contained" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconBig)} />
        Save
      </Button>
    </div>
  );
}

export default IconLabelButtons;