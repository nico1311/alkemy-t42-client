import {Grid, Typography} from '@material-ui/core'
import Buttons from 'components/Profile/Button'
import useStyles from './style';
import { makeRequest } from 'services/httpRequest';
import { ENDPOINT_USER } from 'services/settings';
import {Link} from 'react-router-dom';


const DeleteProfile = (redirect) => {
    const classes = useStyles();
    const id = 1;
    const handleClickDelete = async () => {
    try {
    const result = await makeRequest(`${ENDPOINT_USER}/${id}`, "DELETE");
    if (result.status === 200) redirect('/');    
    } catch (error) {
     console.log(error)   
    }
    };

    return ( 
        <Grid container className={classes.raiz}>
            <Grid item className={classes.background}>
                <Typography variant={'h4'}>¿Está seguro que quiere eliminar su cuenta?</Typography>
                <Grid container className={classes.root}>
                    <Link to='/perfil'><Buttons texto="Cancelar" color="primary" /></Link>
                    <Buttons onClick={handleClickDelete} texto="Delete" color="secondary"/>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default DeleteProfile