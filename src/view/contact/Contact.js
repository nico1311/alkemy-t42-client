import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import FormContact from 'components/form/contact/FormContact';

/**This is a view for '/contactos'. It contains two columns (left is for text and right is for a contact form)
 * @function Contact 
 * @example
 * <Contact />
 * import Contact from 'view/contact/Contact.js'
 * */

const Contact = () => {
  return (
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
  );
};

export default Contact;
