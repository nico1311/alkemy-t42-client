import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from 'redux/testimonials/actions/testimonials';
import { makeGET } from 'services/httpRequest.js';
import { ENDPOINT_GETTESTIMONIALS } from 'services/settings';
import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AlertDelete from 'components/utils/alertDelete/AlertDelete';
import ContentModal from 'components/utils/contentModal/ContentModal';

const ListadoTestimonios = () => {
  const dispatch = useDispatch();
  const testimonialsFromStore = useSelector(state => state.testimonials.testimonials)
  const history = useHistory();
  const { url } = useRouteMatch();
  const [testimonials, setTestimonials] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [pendingTestimony, setPendingTestimony] = useState(null);

  useEffect(() => {
    async function getAllTestimonials() {
      const { Testimonials: testimonialsAPI } = await makeGET(ENDPOINT_GETTESTIMONIALS);
      dispatch(getTestimonials(testimonialsAPI));
      setTestimonials(testimonialsAPI);
    }
    !testimonialsFromStore ? getAllTestimonials() : setTestimonials(testimonialsFromStore);
  }, []);

  const handleOpenAlert = (testimonyID) => {
    setPendingTestimony(
      testimonials.find((testimony) => testimony.id === testimonyID),
    );
    setOpenAlert(true);
  };

  const handleDeleteCancel = () => {
    setPendingTestimony(null);
    setOpenAlert(false);
  };

  const handleDeleteConfirm = () => {
    setPendingTestimony(null);
    setOpenAlert(false);
    setToastOpen(true);
  };

  if (testimonials) {
    return (
      <>
        <Container>
          <div style={{ width: '100%' }}>
            <Box display='flex'>
              <Box width='100%'>
                {' '}
                <Typography variant='h4' component='h1' gutterBottom>
                  {' '}
                  Testimonios{' '}
                </Typography>{' '}
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
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Contenido</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testimonials.map((testimony, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{testimony.id}</TableCell>
                      <TableCell>{testimony.name}</TableCell>
                      <TableCell>
                        <ContentModal
                          message={testimony.content}
                        ></ContentModal>
                      </TableCell>
                      <TableCell>
                        <Button>Editar</Button>
                        <Button onClick={() => handleOpenAlert(testimony.id)}>
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        {pendingTestimony && (
          <AlertDelete
            open={openAlert}
            message={`¿Eliminar la categoría "${pendingTestimony.name}"?`}
            confirmar={handleDeleteConfirm}
            cancelar={handleDeleteCancel}
            onClose={() => setToastOpen(false)}
            snack={toastOpen}
            Message='Categoría eliminada'
            closeIcon={() => setToastOpen(false)}
            toastMessage='Se ha eliminado correctamente.'
          />
        )}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={toastOpen}
          autoHideDuration={2000}
          onClose={() => setToastOpen(false)}
          message='Categoría eliminada'
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
  } else {
    return <h1>No hay testimonios para mostrar.</h1>;
  }
};

export default ListadoTestimonios;
