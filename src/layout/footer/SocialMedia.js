/** @module Footer */
import { Grid, Link, Typography, List, ListItem } from '@material-ui/core';
import useStyles from './style';
/**
 * @function SocialMedia
 * @example
 * import SocialMedia from "layout/footer/SocialMedia";
 *
 * <SocialMedia />
 */
const SocialMedia = ({
  arraySocialMedia = [{ socialMediaName: '', link: '' }],
}) => {
  // object with styles options
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4}>
      <Grid container justify='space-around' align='flex-start'>
        <List>
          <ListItem>
            <Typography variant='h6' className={classes.listTitle}>
              Nuestras redes
            </Typography>
          </ListItem>
          {arraySocialMedia.map(({ link, socialMediaName }, i) => (
            <ListItem key={i}>
              <Link
                target='_blank'
                rel='noreferrer'
                href={link}
                className={classes.footerSocialLink}
              >
                {socialMediaName}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
