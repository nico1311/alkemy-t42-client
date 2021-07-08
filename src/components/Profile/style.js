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
    },
    button: {
        margin: theme.spacing(2, 2, 0),
        width: theme.spacing(30),
    }
}));

export default useStyles;