import React from 'react'
import {
    List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core'
import People from '@material-ui/icons/People';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ContactsIcon from '@material-ui/icons/Contacts';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const AdminMenu = ({ onClickHandler }) => {
    return (
        <List>
            <ListItem button onClick={() => onClickHandler('/')}>
                <ListItemIcon><FaceIcon/></ListItemIcon>
                <ListItemText primary={'Mi perfil'}/>
            </ListItem>

            <ListItem button onClick={() => onClickHandler('/users')}>
                <ListItemIcon><People /></ListItemIcon>
                <ListItemText primary={'Users'} />
            </ListItem>

            <ListItem button onClick={() => onClickHandler('/news')}>
                <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                <ListItemText primary={'Noticias'} />
            </ListItem>

            <ListItem button onClick={() => onClickHandler('/organization')}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary={'Organizacion'} />
            </ListItem>

            <ListItem button onClick={() => onClickHandler('/activities')}>
                <ListItemIcon><AccessibilityNewIcon /></ListItemIcon>
                <ListItemText primary={'Actividades'} />
            </ListItem>

            <ListItem button onClick={() => onClickHandler('/testimonials')}>
                <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                <ListItemText primary={'Testimonios'} />
            </ListItem>

            <ListItem button onClick={() => onClickHandler('/lista-contactos')}>
                <ListItemIcon> <ContactsIcon /> </ListItemIcon>
                <ListItemText primary={'Contactos'} />
            </ListItem>

            <ListItem button onClick={() => onClickHandler('home')}>
                <ListItemIcon><KeyboardReturnIcon/></ListItemIcon>
                <ListItemText primary={'Volver'}/>
            </ListItem>
        </List>
    )
}

export default AdminMenu
