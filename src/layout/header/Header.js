import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Button,
  Grid,
} from '@material-ui/core';
import LogoImage from '../../../src/images/assets/logosomos.png';
import DrawerComponent from './drawer';
import useStyles from './style';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from "services/auth";

const NavBar = () => {
  const user = useSelector(state => state.user.user) //Aca esta el usuario ;)
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleClick = (e, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar color='primary' className={classes.offset}>
      <Toolbar className={classes.spaced}>
        <Link to='/'>
          <img src={LogoImage} className={classes.logo} alt='ONG'></img>
        </Link>
        {isMatch ? (
          <DrawerComponent className={classes.drawer} />
        ) : (
          <>
            <Grid container className={classes.align}>
              <Grid item className={classes.align}>
                <Tabs
                  onChange={handleClick}
                  indicatorColor='secondary'
                  value={value}
                >
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='nosotros'
                    to='/nosotros'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='contacto'
                    to='/contacto'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='novedades'
                    to='/novedades'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='actividades'
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='testimonios'
                  />
                </Tabs>
              </Grid>
                {user ? <>
                  <Button
                  onClick={() => history.push('/backoffice')}
                  variant='contained'
                  color='secondary'
                  className={classes.split}
                >
                  Backoffice
                  </Button>
                  <Button
                  onClick={logout}
                  variant='contained'
                  color='secondary'
                  className={classes.split}
                >
                  Logout
                  </Button>
                </>  : (<Grid item className={classes.align}>
                <Button
                  onClick={() => history.push('/registrar')}
                  variant='contained'
                  color='secondary'
                  className={classes.split}
                >
                  Registrarse
                </Button>

                <Button
                  onClick={() => history.push('/ingresar')}
                  variant='contained'
                  color='secondary'
                  className={classes.split}
                >
                  Iniciar sesión
                </Button>
              </Grid>)}
              
            </Grid>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;