import React from 'react';
import useStyles from './style.js';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const New = (props) => {
  const classes = useStyles();
  const { createdAt, name, image } = props.props;
  const date = createdAt.slice(0, 10);
  return (
    <Grid item xs={12} md={5} lg={3} xl={2} className={classes.new}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cardImage}
          component='img'
          alt='Imagen de novedad'
          image={image}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2'>{date}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default New;
