import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2, 2, 0),
        width: theme.spacing(30),
    },
    }));


  export default function Buttons(props) {

    
    const classes = useStyles();
  
    return (
        <Button
          variant="contained"
          color={props.color}
          className={classes.button}
          startIcon={props.icono}
          onClick={props.onClick}
        >
          {props.texto}
        </Button>
  );
}