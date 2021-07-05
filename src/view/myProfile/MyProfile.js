import {React, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import CardProfile from 'components/Profile/CardProfile';
import Buttons from 'components/Profile/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AlertGenerator from 'components/utils/alert/AlertGenerator'

{/* <AlertGenerator contentText={'Esta es una alerta'} contentTitle={'Super Alerta'} /> */}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconos:{
        color: 'white'
    }
}));

// const id = props.match.params.id;

function MyProfile(props) {
    const classes = useStyles();
    
    const [isDeleting, setIsDeleting] = useState(false)

    const useDelete = () => {
        setIsDeleting(true)
        console.log('Deleting')
    }

    return (
        
            <Grid className={classes.root} container>
                {
                    isDeleting ? <AlertGenerator contentText={'Esta es una alerta'} alertTitle={'Super Alerta'} /> : null
                } 
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <CardProfile icono={<FaceIcon className={classes.iconos}/>} titulo="Name" texto="Leandro" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <CardProfile icono={<AccountCircleIcon className={classes.iconos}/>} titulo="Surname" texto="Garassino" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <CardProfile icono={<MailIcon className={classes.iconos}/>} titulo="Email" texto="leandro.garassino@gmail.com" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid container className={classes.root}>
                    <Buttons icono={<EditIcon className={classes.iconos}/>} texto="Edit" color="primary" />
                    <Buttons onClick={useDelete} icono={<DeleteIcon className={classes.iconos}/>} texto="Delete" color="secondary"/>
                    
                </Grid>
            </Grid>
    )
}

export default MyProfile
