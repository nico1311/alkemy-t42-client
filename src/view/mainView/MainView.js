import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'layout/header/Header';
import Footer from 'layout/footer/Footer';
import { Grid } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import {
  initial,
  animate,
  exit,
} from 'components/utils/transitionEffect/transitionPropertys';

const HomePage = lazy(() => import('view/home/Home'));
const AboutUs = lazy(() => import('view/aboutUs/AboutUs'));
const SignUp = lazy(() => import('view/signup/SignUp'));
const SignIn = lazy(() => import('view/signin/SignIn'));
const Contact = lazy(() => import('view/contact/Contact'));

const MainView = () => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div initial={initial} animate={animate} exit={exit}>
          <Header />
          <Grid container>
            <Switch>
              <Route path='/nosotros' component={AboutUs} />
              <Route path='/contacto' component={Contact} />
              <Route path='/registrar' component={SignUp} />
              <Route path='/ingresar' component={SignIn} />
              <Route path='/' component={HomePage} />
            </Switch>
          </Grid>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainView;
