import React, { useEffect, useState } from 'react';
import { makeGET, makeDELETE, makePUT } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import useStyles from './style';

const Activities = () => {
  const [edit, setEdit] = useState('');
  const [activityName, setActivityName] = useState('');
  const [activities, setActivities] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    getActivities();
    return () => {};
  }, []);

  const getActivities = async () => {
    const activities = await makeGET(ENDPOINT_ACTIVITIES);
    setActivities(activities.activities);
  };
  const ModifyActivity = async (id) => {
    setEdit('');
    await makePUT(`${ENDPOINT_ACTIVITIES}/${id}`, { name: activityName });

    getActivities();
  };
  const deleteActivity = async (id) => {
    await makeDELETE(`${ENDPOINT_ACTIVITIES}/${id}`);
    getActivities();
  };

  return (
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
                {edit !== i ? (
                  <TableCell>{activity.name}</TableCell>
                ) : (
                  <TableCell>
                    <TextField
                      required
                      id='standard-basic'
                      defaultValue={activity.name}
                      onChange={(e) => {
                        setActivityName(e.target.value);
                      }}
                    ></TextField>
                  </TableCell>
                )}
                <TableCell className={classes.right}>
                  {edit !== i ? (
                    <Button
                      color='secondary'
                      variant='contained'
                      className={`${classes.button} ${classes.buttonEdit}`}
                      onClick={() => setEdit(i)}
                    >
                      Editar
                    </Button>
                  ) : (
                    <Button
                      color='secondary'
                      variant='contained'
                      className={`${classes.button} ${classes.buttonSend}`}
                      onClick={() => ModifyActivity(activity.id)}
                    >
                      Enviar
                    </Button>
                  )}

                  {edit !== i ? (
                    <Button
                      color='secondary'
                      variant='contained'
                      className={classes.button}
                      onClick={() => deleteActivity(activity.id)}
                    >
                      Eliminar
                    </Button>
                  ) : (
                    <Button
                      color='secondary'
                      variant='contained'
                      className={classes.button}
                      onClick={() => setEdit('')}
                    >
                      Cancelar
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Activities;
