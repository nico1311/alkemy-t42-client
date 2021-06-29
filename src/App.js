import { UserContextProvider } from 'context/UserContext';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
<<<<<<< HEAD
import Footer from './layout/footer/Footer';
=======
import Loader from './layout/loader/Loader'
>>>>>>> bd48a52ba452ef9aa8fce08cb70b7420aa2380e5

const App = () => (
  <UserContextProvider>
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Happy coding!
        </Typography>
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
        <Loader />
      </Box>
    </Container>
    <Footer />
  </UserContextProvider>
);

export default App;
