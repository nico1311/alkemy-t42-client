import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
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
      <Grid container justify='center'>
        <Grid item md={4} xs={12} className={classes.textContainer}>
          <Typography variant='body1'>Texto predeterminado</Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <FormContact></FormContact>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
