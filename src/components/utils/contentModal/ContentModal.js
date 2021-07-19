import {useState} from 'react';
import {Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography
} from '@material-ui/core'
import useStyle from './style';


const ContentModal = ({message}) => {
    const [openMessage, setOpenMessage] = useState(false);
    const classes = useStyle();

    return (
      <div>
        <Button onClick={() => setOpenMessage(true)}>Contenido</Button>
  
        <Dialog
          onClose={() => setOpenMessage(!openMessage)}
          aria-labelledby='customized-dialog-title'
          open={openMessage}
          className={classes.container}
        >
          <DialogTitle
            id='customized-dialog-title'
            onClose={() => setOpenMessage(!openMessage)}
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
              onClick={() => setOpenMessage(!openMessage)}
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