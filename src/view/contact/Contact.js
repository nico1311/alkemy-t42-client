import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import FormContact from 'components/form/contact/FormContact';
import useStyles from './styles';

/**This is a view for '/contactos'. It contains two columns (left is for text and right is for a contact form)
 * @function Contact
 * @example
 * <Contact />
 * import Contact from 'view/contact/Contact.js'
 * */

const Contact = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid container justify='center' alignItems='center'>
      <Box textAlign='center' marginTop='2vh'>
          <Typography variant='h5'>Texto Predeterminado</Typography>
      </Box>
      
      <Grid item md={6} xs={12}>
      <Box textAlign='center'>
          <FormContact></FormContact>
      </Box>
          
      </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
