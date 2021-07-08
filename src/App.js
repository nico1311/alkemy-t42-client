import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/utils/Loader/Loader';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

const MainView = lazy(() => import('view/mainView/MainView'))
const BackOfficeView = lazy(() => import('view/backOfficeView/BackOfficeView'))

const App = () => (
  <Suspense fallback={<Loader />}>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/backoffice' component={BackOfficeView} /> {/** This should be a Private Route */}
        <Route path='/' component={MainView} />
      </Switch>
    </ThemeProvider>
  </Suspense>
);

export default App;
