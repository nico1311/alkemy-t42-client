import { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest.js';
import { ENDPOINT_GETTESTIMONIALS } from 'services/settings';
import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  
} from '@material-ui/core';
import AlertDelete from 'components/utils/alertDelete/AlertDelete';
import ContentModal from 'components/utils/contentModal/ContentModal';



const ListadoTestimonios = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [pendingTestimony, setPendingTestimony] = useState(null);

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
    setOpenAlert(false)
    setToastOpen(true);
    console.log(toastOpen);
    setPendingTestimony(null);
  };

  useEffect(() => {
    async function getTestimonials() {
      const { Testimonials: testimonialsAPI } = await makeGET(
        ENDPOINT_GETTESTIMONIALS,
      );
      setTestimonials(testimonialsAPI);
    }
    getTestimonials();
  }, []);

  console.log(testimonials);

  return (
    <>
      <Container>
        <Typography variant='h4' component='h1' gutterBottom>
          Testimonios
        </Typography>
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
              {testimonials.map((testimony) => {
                return (
                  <TableRow>
                    <TableCell>{testimony.id}</TableCell>
                    <TableCell>{testimony.name}</TableCell>
                    <TableCell><ContentModal message={testimony.content}></ContentModal></TableCell>
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
        <>
          <AlertDelete
            open={openAlert}
            cancelar={() => handleDeleteCancel()}
            confirmar={handleDeleteConfirm}
            snack={toastOpen}
            onClose={() => setToastOpen(false)}
            closeIcon={() => setToastOpen(false)}
            message={`¿Desea eliminar el testimonio "${pendingTestimony.name}"?`}
            toastMessage={'Testimonio eliminado'}
          />
        </>
      )}
    </>
  );
};

export default ListadoTestimonios;
