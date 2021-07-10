import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
    marginTop: 30,
    boxShadow: '-5px 5px 5px 0px rgba(0, 0, 0, 0.192)',
    borderRadius: '20px 20px 0px 0px '
  },
  img: {
    height: 250
  }
});

const Entry = ({ entry }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Imagen del post'
            height='140'
            image={entry.image}
            title='Imagen del post'
            className={classes.img}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {entry.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='large' color='primary'>
            Share
          </Button>
          <Button size='large' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Entry;
