//import { UserContextProvider } from 'context/UserContext';
import Container from '@material-ui/core/Container';
import {Box, Grid, Typography, Link} from '@material-ui/core';
//import Loader from './layout/loader/Loader'
import HomePage from './view/home/Home';



const App = () => {


    return(
    <Container>
      <Box>
      <HomePage />
      <Grid>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          <Link
            color='inherit'
            href='https://bitbucket.org/alkemy-dev/t42-project-client/src/master/'
          >
            Team 42 - ONG Proyect
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
        {/*<Loader /> */}
        </Grid>
      </Box>
    </Container>
    )
};

export default App;
