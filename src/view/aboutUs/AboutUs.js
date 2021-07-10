import React from 'react';
import { Container } from '@material-ui/core';
import Slider from 'components/slider/Slider';
import useStyles from './style.js';

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Slider />
    </Container>
  );
};

export default AboutUs;
