import { Suspense, lazy } from 'react';
import useUser from 'hooks/useUser';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute';
import Loader from './components/utils/Loader/Loader';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

const MainView = lazy(() => import('view/mainView/MainView'));
const BackOfficeView = lazy(() => import('view/backOfficeView/BackOfficeView'));

const App = () => {
  const { isAdmin, isLogged, loading, data } = useUser();
  console.log({ isAdmin, isLogged, loading, data }); // Only to set results. Remove.
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <Switch>
          <PrivateRoute
            path='/backoffice'
            component={BackOfficeView}
            redirectTo={'/'}
            shouldBeAdmin={false}
          />
          <Route path='/' component={MainView} />
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
