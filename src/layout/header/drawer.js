import React, {useState} from 'react'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const DrawerComponent = () => {
    const useStyles = makeStyles(theme => ({
        drawerContainer: {},
        iconButtonContainer: {
          marginLeft: 'auto',
          color: 'white',
        },
    
        menuIconToggle: {
          fontSize: '3rem',
        },
      }));

    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles(); 
    return (
        <>
            <Drawer 
                anchor='left'
                open={openDrawer} 
                onClose={ () => setOpenDrawer(false)} 
                
                onOpen={() => setOpenDrawer(true)}>
                <List>
                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Nosotros</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Contacto</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Novedades</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Actividades</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Testimonios</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Registrarse</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Iniciar Sesión</ListItemText>                        
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                className={classes.iconButtonContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple>
                <MenuIcon className={classes.menuIconToggle} />
            </IconButton>
        </>
    )
}

export default DrawerComponent;