import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import { isLogged } from '../../hooks/useUser'


const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/nosotros' style={{ textDecoration: 'none' }}>
                  Nosotros
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/contacto' style={{ textDecoration: 'none' }}>
                  Contacto
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/novedades' style={{ textDecoration: 'none' }}>
                  Novedades
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/actividades' style={{ textDecoration: 'none' }}>
                  Actividades
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/testimonios' style={{ textDecoration: 'none' }}>
                  Testimonios
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          {isLogged ? (<List>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/backoffice' style={{ textDecoration: 'none' }}>
                      Backoffice
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/perfil' style={{ textDecoration: 'none' }}>
                      Perfil
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                      Log out
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>                 
            </List>
          ):(<List>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  <Link to='/registrar' style={{ textDecoration: 'none' }}>
                    Registrarse
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  <Link to='/ingresar' style={{ textDecoration: 'none' }}>
                    Iniciar Sesión
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
          </List>)}
        </List>
      </Drawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;