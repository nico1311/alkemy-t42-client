import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Slider from 'components/slider/Slider';

const AboutUs = () => {
  const useStyles = makeStyles(() => ({
    root: {
      padding: '0',
      width: '100%',
      maxWidth: 'none',
    },
  }));
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Slider />
    </Container>
  );
};

export default AboutUs;
