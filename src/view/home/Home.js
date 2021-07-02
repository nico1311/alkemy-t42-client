import Home from 'components/Home/Home';
import { useEffect } from 'react';
import { getNews, getMessage} from 'redux/Home/actions/home';
import { useDispatch } from 'react-redux';
import { Container, Box } from '@material-ui/core';

const HomePage = () => {

 const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getNews);

    dispatch(getMessage);

  }, [dispatch])

    return ( 
        <Container >
            <Box >
                <Home/>
            </Box>
        </Container>
     );
}
 
export default HomePage;