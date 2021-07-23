import {Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography
} from '@material-ui/core'
import useStyles from './style';

const ContentModal = ({ message, isOpen, onClose }) => {
    const classes = useStyles();

    return (
      <div>  
        <Dialog
          onClose={onClose}
          aria-labelledby='customized-dialog-title'
          open={isOpen}
          className={classes.container}
        >
          <DialogTitle
            id='customized-dialog-title'
            onClose={onClose}
          >
            Contenido
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {message}
            </Typography>
            
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={onClose}
              color='primary'
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default ContentModal;