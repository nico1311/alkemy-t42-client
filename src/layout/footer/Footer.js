/**
 *  @module Footer
 **/
import React from 'react';
import useFetch from '../../hooks/useFetch';
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
/**
 * Component styles
 */
const useStyles = makeStyles({
  footer: {
    backgroundColor: '#400CCC',
    flexGrow: '1',
    color: 'white',
    padding: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
  },
  footerSocialLink: {
    margin: theme.spacing(0.6, 0),
    color: 'white',
    textTransform: 'capitalize',
  },
  listTitle: {
    margin: theme.spacing(0.6, 0),
  },
  copyright: {
    margin: theme.spacing(5, 0),
  },
  marginAuto: {
    margin: 'auto',
  },
  maxWidth: {
    maxWidth: '1280px',
  },
});
/**
 * @function Footer
 * @returns a footer component layout
 */
export default function Footer() {
  /**
   *Names of social networks displayed in footer obtained in useFetch
   *@type {Array<string>}
   */
  let socialLinks = [];

  /**
   *Links of social networks profile displayed in footer obtained in useFetch
   *@type {Array<string>}
   */
  let socialLinksLink = [];

  const data = useFetch(
    'http://localhost:4000/organizations/1/public',
  ).response;
  for (let key in data.socialLinks) {
    socialLinksLink.push(data.socialLinks[key]);
    socialLinks.push(key);
  }

  /**
   * object with styles options
   * @type {object}
   */
  const classes = useStyles();
  /**
   * Page links displayed on footer
   * The value is the "href" and the message displayed
   * @type {Array<string>}
   */
  const footerWebLinks = ['news', 'testimonials', 'contact'];

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.maxWidth}>
        <Grid item xs={12} sm={4} className={classes.marginAuto}>
          <Grid container justify='center' alignItems='center' align='center'>
            <img src={data.image} alt='ONG Logo in footer' width='120px' />
            <Typography variant='h5'>{data.name}</Typography>
          </Grid>
        </Grid>

        <Grid item sm={4} xs={6}>
          <Grid container justify='space-around' align='flex-start'>
            <List>
              <ListItem>
                <Typography variant='h6' className={classes.listTitle}>
                  Resources
                </Typography>
              </ListItem>
              {footerWebLinks.map((item, i) => (
                <ListItem key={i}>
                  <Link className={classes.footerSocialLink} href={`#${item}`}>
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Grid container justify='space-around' align='flex-start'>
            <List>
              <ListItem>
                <Typography variant='h6' className={classes.listTitle}>
                  Follow Us
                </Typography>
              </ListItem>

              {socialLinks.map((item, i) => (
                <ListItem key={i}>
                  <Link
                    target='_blank'
                    rel='noreferrer'
                    href={socialLinksLink[i]}
                    className={classes.footerSocialLink}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.maxWidth}>
          <Grid container justify='center' alignItems='center'>
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
      </Grid>
    </footer>
  );
}
