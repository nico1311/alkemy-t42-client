import {React} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import CardProfile from 'components/Profile/CardProfile';
import Buttons from 'components/Profile/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

{/* <AlertGenerator contentText={'Esta es una alerta'} contentTitle={'Super Alerta'} /> */}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5vh',
        marginTop: '5vh'
    },
    iconos:{
        color: 'white'
    },
}));

// const id = props.match.params.id;

function MyProfile(props) {
    const classes = useStyles();
    const history = useHistory()
    
    const useDelete = () => {
        history.push('/perfil/eliminar')
        console.log('Deleting')
    }

    return (
        
            <Grid className={classes.root} container>
                 
                <Grid item xs={10} md={8} xl={4}>
                    <CardProfile icono={<FaceIcon className={classes.iconos}/>} titulo="Nombre" texto="Leandro" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={10} md={8} xl={4}>
                    <CardProfile icono={<AccountCircleIcon className={classes.iconos}/>} titulo="Apellido" texto="Garassino" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={10} md={8} xl={4}>
                    <CardProfile icono={<MailIcon className={classes.iconos}/>} titulo="Email" texto="leandro.garassino@gmail.com" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid container className={classes.root}>
                    <Link to='#'><Buttons icono={<EditIcon className={classes.iconos}/>} texto="Edit" color="primary" /></Link>
                    <Buttons onClick={useDelete} icono={<DeleteIcon className={classes.iconos}/>} texto="Delete" color="secondary"/>
                </Grid>
            </Grid>
    )
}

export default MyProfile
