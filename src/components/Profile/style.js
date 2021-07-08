import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        height: '18vh',
        margin: '1vh',
        marginTop: theme.spacing(2),
        backgroundColor: "rgba(248,80,50,1)"
    },
    texto:{
        fontSize: '1.5em',
        color: "white"
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: '1.5em',
        color: "white"
    }
}));

export default useStyles;