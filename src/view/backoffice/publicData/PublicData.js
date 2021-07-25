import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_PUBLICDATA } from 'services/settings';
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Typography,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PublicDataForm from 'components/form/publicData/publicDataForm';
import useStyles from './style';

const PublicData = () => {
  const [publicData, setPublicData] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    getPublicData();
  }, []);

  const getPublicData = async () => {
    const response = await makeGET(ENDPOINT_PUBLICDATA);
    setPublicData(response.publicData);
    console.log(publicData);
  };
  const classes = useStyles();
  if (edit) {
    return (
      <PublicDataForm
        publicData={publicData}
        setEdit={setEdit}
        getPublicData={getPublicData}
      ></PublicDataForm>
    );
  }
  if (publicData) {
    return (
      <>
        <Grid container justify='space-between' alignItems='center'>
          <Typography variant='h4'>Datos Publicos</Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              setEdit(true);
            }}
          >
            <EditIcon></EditIcon>
          </Button>
        </Grid>
        <Grid container>
          <Typography variant='h5' className={classes.title}>
            Datos personales:
          </Typography>

          <TableContainer>
            <Table>
              <TableRow>
                <TableCell>Nombre:</TableCell>
                <TableCell>{publicData.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Imagen:</TableCell>
                <TableCell>{publicData.image}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Telefono:</TableCell>
                <TableCell>{publicData.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dirección:</TableCell>
                <TableCell>{publicData.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Texto de bienvenida:</TableCell>
                <TableCell>{publicData.welcomeText}</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <Typography variant='h5' className={classes.title}>
            Redes sociales
          </Typography>
          <TableContainer>
            <Table>
              <TableRow>
                <TableCell>Instagram:</TableCell>
                <TableCell>{publicData.instagram}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Linkedin:</TableCell>
                <TableCell>{publicData.linkedin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Facebook:</TableCell>
                <TableCell>{publicData.facebook}</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>
      </>
    );
  } else {
    return <div>null</div>;
  }
};

export default PublicData;
