import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContextProvider } from 'context/UserContext';
import Loader from './components/utils/Loader/Loader';
import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute';

const WelcomeDevs = lazy(() => import('./view/welcomeDevs/WelcomeDevs'));
const AboutUs = lazy(() => import('./view/aboutUs/AboutUs'));
const SignUp = lazy(() => import('./view/signup/SignUp'));
const SignIn = lazy(() => import('./view/signin/SignIn'));
const Contact = lazy(() => import('./view/contact/Contact'));
const PrivateRouteExample = lazy(() =>
  import('./view/privates/PrivateRouteExample'),
);

const App = () => (
  <UserContextProvider>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path='/' component={WelcomeDevs} />
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
  </UserContextProvider>
);

export default App;
