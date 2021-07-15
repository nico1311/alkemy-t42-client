import React, { useEffect, useState } from 'react';
import { makeGET, makeDELETE } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import EditActivityForm from 'components/form/editActivity/editActivityForm';
import useStyles from './style';
/**
 * Activities view in backoffice
 * @example
 * import Activities from 'view/backoffice/activities/Activities'
 * <Activities />
 */
const Activities = () => {
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
  const deleteActivity = async (id) => {
    await makeDELETE(`${ENDPOINT_ACTIVITIES}/${id}`);
    setOpen(false);
    getActivities();
  };
  const handleClose = () => {
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
                      color='secondary'
                      variant='contained'
                      className={`${classes.button} ${classes.buttonEdit}`}
                      onClick={() => {
                        editActivity(activity.id);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      color='secondary'
                      variant='contained'
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'¿Seguro que desea eliminar la actividad?'}
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setActivityToDelete('');
                setOpen(false);
              }}
              color='secondary'
            >
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
    </>
  );
};

export default Activities;
