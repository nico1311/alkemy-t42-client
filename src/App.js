import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/utils/Loader/Loader';
import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute';
import Header from 'layout/header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from 'layout/header/theme'


const HomePage = lazy(() => import('./view/home/Home'));
const AboutUs = lazy(() => import('./view/aboutUs/AboutUs'));
const SignUp = lazy(() => import('./view/signup/SignUp'));
const SignIn = lazy(() => import('./view/signin/SignIn'));
const Contact = lazy(() => import('./view/contact/Contact'));
const PrivateRouteExample = lazy(() =>
  import('./view/privates/PrivateRouteExample'),
);

const App = () => (
    <Suspense fallback={<Loader />}>
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/nosotros' component={AboutUs} />
          <Route exact path='/contacto' component={Contact} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <PrivateRoute
            exact
            path='/rutaprivada'
            component={PrivateRouteExample}
            redirectTo='/'
          />
        </Switch>
    </Suspense>
);

export default App;
