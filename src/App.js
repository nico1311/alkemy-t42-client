import React, { Suspense, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loader from './components/utils/Loader/Loader';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { AnimatePresence, motion } from 'framer-motion';

const MainView = lazy(() => import('view/mainView/MainView'));
const BackOfficeView = lazy(() => import('view/backOfficeView/BackOfficeView'));

const App = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <motion.div
              initial={{ opacity: 0, width: '100%' }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Route path='/backoffice' component={BackOfficeView} />{' '}
              {/** This should be a Private Route */}
              <Route path='/' component={MainView} />
            </motion.div>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
