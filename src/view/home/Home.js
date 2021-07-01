import Home from './../../component/Home/Home';
import { useEffect } from 'react';
import { getNews, getMessage} from './../../redux/Home/actions/home';
import { useDispatch } from 'react-redux';


const HomePage = () => {

 const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getNews);

    dispatch(getMessage);
    
  }, [dispatch])

    return ( 
        <Home/>
     );
}
 
export default HomePage;