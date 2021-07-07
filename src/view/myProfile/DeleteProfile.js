import {Grid, Typography} from '@material-ui/core'
import Buttons from 'components/Profile/Button'
import { makeStyles } from '@material-ui/core';
import { makeRequest } from 'services/httpRequest';
import { ENDPOINT_USER } from 'services/settings';
import {Link} from 'react-router-dom';

const handleClickDelete = async (id) => {
    try {
    const result = await makeRequest(`${ENDPOINT_USER}${id}`, "DELETE");    
    } catch (error) {
     console.log(error)   
    }
  };

const useStyles = makeStyles(() => ({
    root: { 
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10vh',
        marginBottom: '10vh'
    },
    background:{
        backgroundColor: '#e0e0e0',
        padding: '2vh'
    }
}))

const DeleteProfile = () => {
    const classes = useStyles();

    return ( 
        <Grid container className={classes.root}>
            <Grid item className={classes.background}>
                <Typography variant={'h4'}>¿Estas seguro que quiere eliminar su usuario?</Typography>
                <Grid container className={classes.root}>
                    <Link to='/perfil'><Buttons texto="Cancelar" color="primary" /></Link>
                    <Buttons onClick={handleClickDelete} texto="Delete" color="secondary"/>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default DeleteProfile