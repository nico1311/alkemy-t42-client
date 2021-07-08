import {Grid, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import useStyles from './style';
import { makeDELETE } from 'services/httpRequest';
import { ENDPOINT_USER } from 'services/settings';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const DeleteProfile = (redirect) => {
    const classes = useStyles();
    const id = 1;
    const handleClickDelete = async () => {
    try {
    const result = await makeDELETE(`${ENDPOINT_USER}/${id}`);
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
                <Link to='/perfil'><Button className={classes.button} variant="contained" startIcon={<EditIcon className={classes.iconos}/>} color="primary"> Cancel </Button></Link>
                <Button className={classes.button} variant="contained" onClick={handleClickDelete} startIcon={<DeleteIcon className={classes.iconos}/>} color="secondary"> Delete </Button>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default DeleteProfile