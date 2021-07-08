import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/utils/Loader/Loader';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

<<<<<<< HEAD
const MainView = lazy(() => import('view/mainView/MainView'))
const BackOfficeView = lazy(() => import('view/backOfficeView/BackOfficeView'))
=======
const HomePage = lazy(() => import('./view/home/Home'));
const AboutUs = lazy(() => import('./view/aboutUs/AboutUs'));
const SignUp = lazy(() => import('./view/signup/SignUp'));
const SignIn = lazy(() => import('./view/signin/SignIn'));
const Contact = lazy(() => import('./view/contact/Contact'));
const MyProfile = lazy(() => import('view/myProfile/MyProfile'));
const DeleteProfile = lazy(() => import('view/myProfile/DeleteProfile'));
const PrivateRouteExample = lazy(() =>
  import('./view/privates/PrivateRouteExample'),
);
>>>>>>> 5fdfdc98a05ee3973d5ed4fcf1bf609d2c5d479a

const App = () => (
  <Suspense fallback={<Loader />}>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Switch>
        <Route path='/backoffice' component={BackOfficeView} /> {/** This should be a Private Route */}
        <Route path='/' component={MainView} />
      </Switch>
=======
      <Header />
      <Grid container>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/nosotros' component={AboutUs} />
          <Route exact path='/contacto' component={Contact} />
          <Route exact path='/registrar' component={SignUp} />
          <Route exact path='/ingresar' component={SignIn} />
          <Route exact path='/perfil' component={MyProfile} />
          <Route exact path='/perfil/eliminar' component={DeleteProfile} />
          <PrivateRoute
            exact
            path='/rutaprivada'
            component={PrivateRouteExample}
            redirectTo='/'
          />
        </Switch>
      </Grid>
      <Footer />
>>>>>>> 5fdfdc98a05ee3973d5ed4fcf1bf609d2c5d479a
    </ThemeProvider>
  </Suspense>
);

export default App;
