import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute'
import Loader from './components/utils/Loader/Loader';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_GETLOGGED } from 'services/settings';
import { getLoggedUser } from 'redux/user/actions/user';
import { getToken } from 'services/tokenHandler'

const MainView = lazy(() => import('view/mainView/MainView'));
const BackOfficeView = lazy(() => import('view/backOfficeView/BackOfficeView'));

const App = () => {
  const dispatch = useDispatch()
  // Set user on APP if have a token in LocalStorage.
  useEffect(() => {
      makeGET(ENDPOINT_GETLOGGED).then((res) => dispatch(getLoggedUser(res)));
  }, [dispatch]);
  return (
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <Switch>
            <PrivateRoute path='/backoffice' component={BackOfficeView} redirectTo={'/'} shouldBeAdmin={false} />
            <Route path='/' component={MainView} />
          </Switch>
        </ThemeProvider>
      </Suspense>
  );
};

export default App;
