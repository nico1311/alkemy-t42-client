import React, {useEffect, useState} from 'react';
import { Container, Grid } from '@material-ui/core';
import Slider from 'components/slider/Slider';
import useStyles from './style.js';
import Members from 'components/aboutUs/Members'
import { ENDPOINT_MEMBERS } from 'services/settings'
import { makeGET } from 'services/httpRequest'

const AboutUs = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function getMembers() {
      const AllMembers = await makeGET(ENDPOINT_MEMBERS);
      setMembers(AllMembers.allMembers);
    }
    getMembers();
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Slider />
      <Grid container className={classes.margin} justify='space-between'>
      {members ? members.map((item, i) => (
        <Members key={i} name={item.name} image={item.image} createdAt={item.createdAt} />
      )) : '' }
      </Grid>
    </Container>
  );
};

export default AboutUs;
