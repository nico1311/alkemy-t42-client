import React from 'react';
import useStyles from './style';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';

const CardComponent = ({ title, image, content }) => {
  const classes = useStyles();
  return (
    <Grid container align='center' className={classes.container}>
      <Grid item xs='12'>
        <Card>
          <CardMedia
            component='img'
            image={image}
            title={`${title} image`}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant='h3' component='h3'>
              {title}
            </Typography>
            <Typography variant='h5' component='p'>
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
