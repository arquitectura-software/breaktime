import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 10,
    paddingTop: '66.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RecipeReviewCard(b) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>User</Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title=" Event - Universe"
        subheader="Mayo 28, 2019"
      />
      <CardMedia
        className={classes.media}
        image="universe.jpg"
        title="universe"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lo que haria por que la imagen apareciera
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
        <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Cuerpo de algo:</Typography>
          <Typography paragraph>
            Esto es algo que está escodido
          </Typography>
          <Typography paragraph>
            mas texto escondido
          </Typography>
          <Typography paragraph>
            un parrafo de mas
          </Typography>
          <Typography>
            Esto ya es lo ultimo
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard;