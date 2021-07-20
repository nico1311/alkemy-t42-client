import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import { ENDPOINT_CONTACTS } from 'services/settings';
import { makeDELETE, makeGET} from 'services/httpRequest';
import CloseIcon from '@material-ui/icons/Close';
import AlertDelete from 'components/utils/alertDelete/AlertDelete';
import ContentModal from 'components/utils/contentModal/ContentModal';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});


export default function ListOfContacts() {

  const [contacts, setContacts] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [pendingContact, setPendingContact] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    async function getContacts() {
      const contactsAPI = await makeGET(
        ENDPOINT_CONTACTS,
      );
      setContacts(contactsAPI.contacts);
    }
    getContacts();
  }, []);
  
  const handleOpenAlert = (id) => {
    setPendingContact(
      contacts.find((contact) => contact.id === id),
    );
    setOpenAlert(true);
  };

  const handleDeleteCancel = () => {
    setPendingContact(null);
    setOpenAlert(false);
  };

  const handleDeleteConfirm = () => {
    try {
      makeDELETE(`${ENDPOINT_CONTACTS}/${pendingContact.id}`);
      setPendingContact(null);
      setOpenAlert(false);
      setToastOpen(true);
      window.location.reload();
    } catch (error) {
      
    }
  };

  console.log(contacts)
  return (
    <>
      <Container>
      <h1 align='center'> Contactos</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mensaje</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((res, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{res.name}</TableCell>
                  <TableCell align="center">{res.email}</TableCell>
                  <TableCell align="center"> 
                    <ContentModal message={res.message}></ContentModal>
                  </TableCell>
                  <TableCell align="center"><Button color="secondary" onClick={() => handleOpenAlert(res.id)}>Eliminar</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {pendingContact &&
        <AlertDelete
          open={openAlert}
          message={`¿Eliminar el contacto de "${pendingContact.name}"?`}
          confirmar={handleDeleteConfirm}
          cancelar={handleDeleteCancel}
          onClose={() => setToastOpen(false)}
          snack={toastOpen}
          Message='Contacto eliminado'
          closeIcon={() => setToastOpen(false)}
          toastMessage="Se ha eliminado correctamente."
        />
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        message='Contacto eliminado'
        action={
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={() => setToastOpen(false)}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        }
      />
    </>
  );
};


