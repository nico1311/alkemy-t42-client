import {React} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import CardProfile from 'components/Profile/CardProfile';
import Buttons from 'components/Profile/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './style';


function MyProfile(props) {
    const classes = useStyles();
    const history = useHistory()
    
    const useDelete = () => {
        history.push('/perfil/eliminar')
    }

    return (
        
            <Grid className={classes.root} container>
                 
                <Grid item xs={10} md={8} xl={4}>
                    <CardProfile icono={<FaceIcon className={classes.iconos}/>} titulo="Nombre" texto="Leandro" />
                </Grid>
                <Grid item xs={10} md={8} xl={4}>
                    <CardProfile icono={<AccountCircleIcon className={classes.iconos}/>} titulo="Apellido" texto="Garassino" />
                </Grid>
                <Grid item xs={10} md={8} xl={4}>
                    <CardProfile icono={<MailIcon className={classes.iconos}/>} titulo="Email" texto="leandro.garassino@gmail.com" />
                </Grid>
                <Grid container className={classes.root}>
                    <Link to='#'><Buttons icono={<EditIcon className={classes.iconos}/>} texto="Edit" color="primary" /></Link>
                    <Buttons onClick={useDelete} icono={<DeleteIcon className={classes.iconos}/>} texto="Delete" color="secondary"/>
                </Grid>
            </Grid>
    )
}

export default MyProfile
