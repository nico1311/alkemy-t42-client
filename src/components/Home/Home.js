// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
//import Slice from './../Slice/Slice'; //importa el componente slice q aun no esta hecho
import { makeStyles, Grid, Typography } from '@material-ui/core';
import CardNews from './../CardNews/CardNews';


const useStyles = makeStyles({
    pageTitle:{
        margin: 50
    },
    welcomeMsg:{
        fontFamily:'Open Sans',
        fontSize: 50,
        margin: 50,
    }
});

const Home = () => {

    const classes = useStyles();

    const news = useSelector(state => state.home.homeNews.slice(-4));
    const welcomeMessage = useSelector(state => state.home.welcomeMessage);
    
    return ( 
        <>
        <Typography variant='h3' component='h1' color='primary' align='center' className={classes.pageTitle}>
            Welcome to this Home Page!<br/>
        </Typography>
        <Typography component='p' variant='h4' align='center' className={classes.welcomeMsg}>
            {welcomeMessage.message}
        </Typography>
        <Grid container spacing={10} justify='center' direction='row' alignItems="center" >
            {news.map((n) => <CardNews item key={n.id} n={n}/>) }
        </Grid>
        </>
     );
}

// const mapStateToProps = (state) =>{
//     return {
//         state: state.homeReducer
//     }
// }

export default Home
// export default connect(mapStateToProps)(Home);