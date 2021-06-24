import { UserContextProvider } from 'context/UserContext';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Header from 'layout/header/Header';

const App = () => (
  <UserContextProvider>
    <Container maxWidth='sm'>
      <Header/>
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
        </Box>
      </Container>
  </UserContextProvider>
);

export default App;
