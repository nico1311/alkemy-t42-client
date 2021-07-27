import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import listTestimonials from './listTestimonials';
import useStyles from './style';

const Testimonials = () => {
  const classes = useStyles();
  return (
    <>
      {listTestimonials.map(({ id, name, image }) => (
        <Grid item xs={12} md={5} lg={3} xl={2} className={classes.grid}>
          <Card>
            <CardMedia
              className={classes.cardImage}
              component='img'
              alt='Imagen de novedad'
              image={image}
              title={name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant='h5' component='h2'>
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Testimonials;
