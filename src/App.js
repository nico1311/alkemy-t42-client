import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loader from './components/utils/Loader/Loader';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_GETLOGGED } from 'services/settings';
import { getLoggedUser } from 'redux/user/actions/user';

const MainView = lazy(() => import('view/mainView/MainView'));
const BackOfficeView = lazy(() => import('view/backOfficeView/BackOfficeView'));

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    makeGET(ENDPOINT_GETLOGGED).then((res) => dispatch(getLoggedUser(res)));
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path='/backoffice' component={BackOfficeView} />{' '}
            {/** This should be a Private Route */}
            <Route path='/' component={MainView} />
          </Switch>
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
