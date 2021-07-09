import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import { makeGET } from 'services/httpRequest';

console.log(makeGET);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

/**
 * User list view (backoffice)
 * @example
 * import Users from 'view/backoffice/users'
 * <Users />
 * @returns {import('react').ReactNode} the users view
 */
const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [pendingUser, setPendingUser] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    makeGET('http://localhost:4000/api/users').then((users) => {
      console.log(users);
    }).catch((err) => {
      console.error('Something went wrong', err);
    });

    // TODO: remove sample data when api call works
    setUsers([
    {
      "id": 1,
      "firstName": "Agna",
      "lastName": "Kienlein",
      "email": "akienlein0@4shared.com",
      "roleId": 2
    }, {
      "id": 2,
      "firstName": "Liesa",
      "lastName": "Mushett",
      "email": "lmushett1@baidu.com",
      "roleId": 1
    }, {
      "id": 3,
      "firstName": "Georgina",
      "lastName": "Macer",
      "email": "gmacer2@pbs.org",
      "roleId": 1
    }, {
      "id": 4,
      "firstName": "Filide",
      "lastName": "Ormonde",
      "email": "formonde3@edublogs.org",
      "roleId": 2
    }, {
      "id": 5,
      "firstName": "Shandie",
      "lastName": "Reinbech",
      "email": "sreinbech4@google.ca",
      "roleId": 2
    }, {
      "id": 6,
      "firstName": "Graham",
      "lastName": "Windross",
      "email": "gwindross5@msu.edu",
      "roleId": 2
    }, {
      "id": 7,
      "firstName": "Northrop",
      "lastName": "Massinger",
      "email": "nmassinger6@digg.com",
      "roleId": 2
    }, {
      "id": 8,
      "firstName": "Peria",
      "lastName": "Restill",
      "email": "prestill7@wikipedia.org",
      "roleId": 2
    }, {
      "id": 9,
      "firstName": "Cleveland",
      "lastName": "Klesse",
      "email": "cklesse8@unc.edu",
      "roleId": 2
    }, {
      "id": 10,
      "firstName": "Alastair",
      "lastName": "Trotton",
      "email": "atrotton9@discovery.com",
      "roleId": 1
    }
  ])
  }, []);

  const handleDeleteAction = (userId) => {
    setPendingUser(users.find((user) => user.id === userId));
    setDeleteDialogOpen(true);
  }

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setPendingUser(null);
  }

  const handleDeleteConfirm = () => {
    console.log(`Deleting user ${pendingUser}`);

    // TODO: api call to delete user

    // remove user from state
    setUsers(users.filter((user) => user.id !== pendingUser.id));

    setDeleteDialogOpen(false);
    setPendingUser(null);
    setToastOpen(true);
  }

  return (
    <>
      <Container px={4} py={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Usuarios
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Correo electrónico</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.roleId === 1 ? 'Administrador' : 'Usuario'}</TableCell>
                  <TableCell align="right">
                    <Button color="primary" component={Link} to={`/backoffice/users/${user.id}/edit`}>Editar</Button>
                    <Button color="secondary" onClick={() => handleDeleteAction(user.id)}>Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {pendingUser &&
        <Dialog
          open={deleteDialogOpen}
          onClose={handleDeleteCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ¿Desea eliminar el usuario {pendingUser.firstName} {pendingUser.lastName}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={toastOpen}
        autoHideDuration={5000}
        onClose={() => setToastOpen(false)}
        message="Usuario eliminado"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setToastOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}

export default Users;
