import React, {Suspense, lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import { UserContextProvider } from 'context/UserContext';
import Loader from './utils/Loader/Loader'

const WelcomeDevs = lazy(() => import('./view/welcomeDevs/WelcomeDevs'))
const AboutUs = lazy(() => import('./view/aboutUs/AboutUs'))

const App = () => (
  <UserContextProvider>
    <Suspense fallback={Loader}>
      <Switch>
        <Route exact path="/" component={WelcomeDevs} />
        <Route exact path="/nosotros" component={AboutUs}/>
      </Switch>
    </Suspense>
  </UserContextProvider>
);

export default App;
