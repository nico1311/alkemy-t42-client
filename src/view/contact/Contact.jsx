import React from 'react';
import Footer from './../../layout/footer/Footer';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import FormContact from './../../components/form/contact/FormContact';


const Contact = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container justify='center'>
          <Grid item xs={4}>
            <Typography variant='body1'>Texto predeterminado</Typography>
          </Grid>
          <Grid item xs={8}>
            <FormContact></FormContact>
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
