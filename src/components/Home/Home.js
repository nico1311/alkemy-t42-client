import { useSelector } from 'react-redux';
//import Slice from './../Slice/Slice'; //importa el componente slice q aun no esta hecho
import { makeStyles, Grid, Typography } from '@material-ui/core';
import CardNews from './../CardNews/CardNews';


const useStyles = makeStyles(theme =>{
    return{
        pageTitle:{
            margin: '5vh'
        },
        [theme.breakpoints.down('sm')]:{
           fontSize: '3em',
        },
        welcomeMsg:{
            fontSize: '5em',
            margin:'5vh',
        [theme.breakpoints.down('sm')]:{
            fontSize: '2em',
        }
    }
}});

const Home = () => {

    const classes = useStyles();

    const news = useSelector(state => state.home.homeNews.slice(-4));
    const welcomeMessage = useSelector(state => state.home.welcomeMessage);
    
    return ( 
        <main>
        <Typography variant='h3' component='h1' color='primary' align='center' className={classes.pageTitle}>
            Welcome to this Home Page!<br/>
        </Typography>
        <Typography component='p' variant='h4' align='center' className={classes.welcomeMsg}>
            {welcomeMessage.message}
        </Typography>
        <Grid container spacing={10} justify='center' direction='row' alignItems="center" >
            {news.map((n) => <CardNews item key={n.id} n={n}/>) }
        </Grid>
        </main>
     );
}


export default Home;