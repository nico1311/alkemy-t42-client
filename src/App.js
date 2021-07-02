import React, {Suspense, lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import { UserContextProvider } from 'context/UserContext';
import Loader from './components/utils/Loader/Loader'
import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute';
import Header from 'layout/header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from 'layout/header/theme'

const WelcomeDevs = lazy(() => import('./view/welcomeDevs/WelcomeDevs'))
const AboutUs = lazy(() => import('./view/aboutUs/AboutUs'))
const PrivateRouteExample = lazy(() => import('./view/privates/PrivateRouteExample'))

const App = () => (
  <UserContextProvider>
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
          <Switch>
            <Route exact path="/" component={WelcomeDevs} />
            <Route exact path="/nosotros" component={AboutUs}/>
            <PrivateRoute exact path="/rutaprivada" component={PrivateRouteExample} redirectTo="/" />
          </Switch>
    </Suspense>

  </UserContextProvider>
);

export default App;
