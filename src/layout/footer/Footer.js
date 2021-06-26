import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Grid,
  createMuiTheme,
  Link,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';

const theme = createMuiTheme();
const useStyles = makeStyles({
  footer: {
    backgroundColor: '#400CCC',
    flexGrow: '1',
    color: 'white',
    padding: '0.8rem',
  },
  font: {
    color: 'white',
  },
  footerSocialLink: {
    margin: theme.spacing(0.6, 0),
    color: 'white',
  },
  listTitle: {
    margin: theme.spacing(0.6, 0),
  },
  copyright: {
    margin: theme.spacing(5, 0),
  },
});

export default function Footer() {
  const mock = {
    image:
      'https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/04/ONG.png',
    name: 'ONG example name',
    linksWeb: ['Who we are', 'Contact', 'Example'],
    socialLinks: [
      'SocialLink Example',
      'SocialLink Example',
      'SocialLink Example',
    ],
  };
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid
          xs={12}
          sm={4}
          container
          justify='space-around'
          alignItems='center'
          align='center'
        >
          <img src={mock.image} alt='' width='120px' />
          <Typography variant='h5' className={classes.font}>
            {mock.name}
          </Typography>
        </Grid>

        <Grid
          sm={4}
          xs={6}
          container
          direction='row'
          justify='space-around'
          align='flex-start'
        >
          <List>
            <ListItem>
              <Typography variant='h6' className={classes.listTitle}>
                About Us
              </Typography>
            </ListItem>
            {mock.linksWeb.map((item) => (
              <ListItem>
                <Link className={classes.footerSocialLink} href={`#${item}`}>
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid
          xs={6}
          sm={4}
          container
          direction='row'
          justify='space-around'
          align='flex-start'
        >
          <List>
            <ListItem>
              <Typography variant='h6' className={classes.listTitle}>
                Follow Us
              </Typography>
            </ListItem>
            {mock.socialLinks.map((item) => (
              <ListItem>
                <Link
                  target='_blank'
                  rel='noreferrer'
                  href='http://youtube.com'
                  className={classes.footerSocialLink}
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid xs={12} container justify='center' alignItems='center'>
          <Typography
            variant='body2'
            align='center'
            className={classes.copyright}
          >
            {'Copyright © '}
            <Link
              color='inherit'
              href='https://bitbucket.org/alkemy-dev/t42-project-client/src/master/'
            >
              Team 42 - ONG Proyect
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
