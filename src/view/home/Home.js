import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import CardNews from 'components/CardNews/CardNews';
import useStyles from './style.js';

const Home = () => {
  const classes = useStyles();
  const news = useSelector((state) => state.home.homeNews.slice(-4));
  const welcomeMessage = useSelector((state) => state.home.welcomeMessage);

  return (
    <main className={classes.root}>
      <Grid
        container
        align='center'
        justify='center'
        direction='column'
        className={classes.container}
      >
        <Typography
          variant='h3'
          component='h3'
          color='primary'
          align='center'
          className={classes.pageTitle}
        >
          Bienvenidos
        </Typography>
        <Typography component='h4' variant='h4' align='center'>
          {welcomeMessage.message}
        </Typography>
        {news.lenght === 0 ? (
          <h2>No hay novedades que mostrar</h2>
        ) : (
          <Grid
            container
            justify='space-around'
            direction='row'
            alignItems='center'
          >
            {news.map((n) => (
              <CardNews item key={n.id} n={n} />
            ))}
          </Grid>
        )}
      </Grid>
    </main>
  );
};

export default Home;
