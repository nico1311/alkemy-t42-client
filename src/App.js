import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from './components/utils/Loader/Loader';
import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./view/home/Home'));
const AboutUs = lazy(() => import('./view/aboutUs/AboutUs'));
const PrivateRouteExample = lazy(() => import('./view/privates/PrivateRouteExample'));

const App = () => (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/nosotros" component={AboutUs}/>
        <PrivateRoute exact path="/rutaprivada" component={PrivateRouteExample} redirectTo="/" />
      </Switch>
    </Suspense>
);

export default App;
