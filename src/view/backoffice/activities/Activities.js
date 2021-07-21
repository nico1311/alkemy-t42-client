import React, { useEffect, useState } from 'react';
import { makeGET, makeDELETE } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogActions,
  Container,
} from '@material-ui/core';
import EditActivityForm from 'components/form/editActivity/editActivityForm';
import useStyles from './style';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
/**
 * Activities view in backoffice
 * @example
 * import Activities from 'view/backoffice/activities/Activities'
 * <Activities />
 */
const Activities = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activityToDelete, setActivityToDelete] = useState('');
  const [activityToEdit, setActivityToEdit] = useState('');

  const classes = useStyles();
  useEffect(() => {
    getActivities();
    return () => {};
  }, []);
  const getActivities = async () => {
    const activities = await makeGET(ENDPOINT_ACTIVITIES);
    setActivities(activities.activities);
  };
  const editActivity = async (id) => {
    const response = await makeGET(`${ENDPOINT_ACTIVITIES}/${id}`);
    setActivityToEdit(response.Activity);
    setEdit(true);
  };
  const deleteActivity = (id) => {
    makeDELETE(`${ENDPOINT_ACTIVITIES}/${id}`);
    setOpen(false);
    setActivities(activities.filter((item) => item.id !== id));
  };
  const handleClose = () => {
    setActivityToDelete('');
    setOpen(false);
  };
  if (edit) {
    return (
      <EditActivityForm
        getActivities={getActivities}
        activityToEdit={activityToEdit}
        setEdit={setEdit}
      ></EditActivityForm>
    );
  }
  return (
    <>
      <Container>
        <div style={{ width: '100%' }}>
          <Box display='flex'>
            <Box width='100%'>
              {' '}
              <Typography variant='h4'> Actividades </Typography>{' '}
            </Box>
            <Box>
              {' '}
              <Button
                onClick={() => history.push(`${url}/create`)}
                variant='contained'
                color='primary'
              >
                Crear
              </Button>{' '}
            </Box>
          </Box>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell className={classes.right}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activities.map((activity, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{activity.name}</TableCell>
                    <TableCell className={classes.right}>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        startIcon={<EditIcon className={classes.icon} />}
                        onClick={() => {
                          editActivity(activity.id);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        startIcon={<DeleteIcon className={classes.icon} />}
                        className={classes.button}
                        onClick={() => {
                          setActivityToDelete(activity.id);
                          setOpen(true);
                        }}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>¿Seguro que desea eliminar la actividad?</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color='secondary'>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  deleteActivity(activityToDelete);
                }}
                color='primary'
                autoFocus
              >
                Eliminar
              </Button>
            </DialogActions>
          </Dialog>
        </TableContainer>
      </Container>
    </>
  );
};

export default Activities;
