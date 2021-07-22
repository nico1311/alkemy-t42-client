import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box} from '@material-ui/core';
import Slider from 'components/slider/Slider';
import useStyles from './style.js';
import Members from 'components/aboutUs/Members';
import { ENDPOINT_MEMBERS } from 'services/settings';
import { makeGET } from 'services/httpRequest';

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
      <Box textAlign='center' marginBottom='5vh' marginTop='2vh' padding='1vh' boxShadow= '20px 20px 10px -10px rgba(0,0,0,0.3)'>
          <Typography variant='h4'>Sobre Nosotros</Typography>
      </Box>
      
      <Slider />

      <Box textAlign='center' marginTop='5vh' marginBottom='2vh' boxShadow= '20px 20px 10px -10px rgba(0,0,0,0.3)'>
          <Typography variant='h4'>Miembros de Somos Más</Typography>
      </Box>
      <Grid container justify='space-between'>
        {members
          ? members.map((item, i) => (
              <Members
                key={i}
                name={item.name}
                image={item.image}
                createdAt={item.createdAt}
              />
            ))
          : ''}
      </Grid>
    </Container>
  );
};

export default AboutUs;
