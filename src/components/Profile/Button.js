import Button from '@material-ui/core/Button';
import useStyles from './style';

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