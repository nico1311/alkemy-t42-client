import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { AnimatePresence, motion } from 'framer-motion';
import DrawerList from 'components/backoffice/drawer';
import {
  initial,
  animate,
  exit,
} from 'components/utils/transitionEffect/transitionPropertys';

const News = lazy(() => import('view/news/NewsBackoffice'));
const ListContacts = lazy(() => import('./ListaContactos'));
const ListaContactosMensaje = lazy(() => import('./ListaContactosMensaje'));
const MyProfile = lazy(() => import('view/myProfile/MyProfile'));
const EditUserForm = lazy(() => import('components/form/editUser/editUserForm.js'));
const DeleteProfile = lazy(() => import('view/myProfile/DeleteProfile'));
const EditUserPage = lazy(() => import('view/editUser/editUserPage'));

const CategoriesView = lazy(() => import('../backoffice/Categories/Categories'));
const UsersView = lazy(() => import('../backoffice/Users/Users'));

function BackOfficeView() {
  const { path } = useRouteMatch();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Somos mas
          </Typography>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerList />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AnimatePresence exitBeforeEnter>
          <motion.div initial={initial} animate={animate} exit={exit}>
            <Switch>

              {/** `/backoffice/users/${user.id}/edit` */}
              <Route
                path={`${path}/users/:id/edit`}
                component={EditUserForm} />
              <Route
                path={`${path}/lista-contactos/:id/:message`}
                component={ListaContactosMensaje} />
              <Route
                path={`${path}/perfil/eliminar`}
                component={DeleteProfile} />
              <Route
                path={`${path}/perfil/editar`}
                component={EditUserPage} />
              <Route
                path={`${path}/categories`}
                component={CategoriesView}
              />
              <Route
                path={`${path}/users`}
                component={UsersView}
              />
              <Route
                path={`${path}/news`}
                component={News}
              />
              <Route
                path={`${path}/organization`}
                component={() => <Test texto='organization' />}
              />
              <Route
                path={`${path}/activities`}
                component={() => <Test texto='activities' />}
              />
              <Route
                path={`${path}/testimonials`}
                component={() => <Test texto='testimonials' />}
              />
              <Route
                path={`${path}/lista-contactos`}
                component={ListContacts}
              />
              <Route
                path={`${path}`}
                component={MyProfile}
              />
            </Switch>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function Test(props) {
  return <h1>{props.texto}</h1>;
}

export default BackOfficeView;
