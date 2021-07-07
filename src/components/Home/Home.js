import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNews, getMessage } from 'redux/home/actions/home';
import { Grid, Typography } from '@material-ui/core';
import CardNews from './../CardNews/CardNews';
import useStyles from './style.js';

const Home = () => {
  const classes = useStyles();
  const news = useSelector((state) => state.home.homeNews.slice(-4));
  const welcomeMessage = useSelector((state) => state.home.welcomeMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews);
    dispatch(getMessage);
  }, [dispatch]);

  return (
    <main className={classes.root}>
      <Typography
        variant='h3'
        component='h1'
        color='primary'
        align='center'
        className={classes.pageTitle}
      >
        Bienvenidos
      </Typography>
      <Typography
        component='p'
        variant='h4'
        align='center'
        className={classes.welcomeMsg}
      >
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
    </main>
  );
};

export default Home;
