import React from 'react';
import useStyles from './style';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';

/**
 * @module CardComponent
 * @function CardComponent
 * component used to display one element what contains title/image/content
 * @param {string} props.title title of card
 * @param {string} props.image (url) of image displayed in card
 * @param {string} props.content content/body of card
 *
 * @example import CardComponent from '/components/cardcomponent/CardComponent'
 * </CardComponent title={'some title'} image{'some-url.com'} content={'this is content of card'}>
 * @returns {void}
 */

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
            <Typography variant='body1' component='p'>
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
