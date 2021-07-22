import { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';

import AlertDelete from 'components/utils/alertDelete/AlertDelete';

import { makeGET, makeDELETE } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';

const Categories = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [pendingCategory, setPendingCategory] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await makeGET(ENDPOINT_CATEGORY);
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  const handleDeleteAction = (categoryId) => {
    setPendingCategory(categories.find((cat) => cat.id === categoryId));
    setDeleteDialogOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setPendingCategory(null);
  };

  const handleDeleteConfirm = async () => {
    const result = await makeDELETE(
      `${ENDPOINT_CATEGORY}/${pendingCategory.id}`,
    );
    if (result) {
      setCategories(categories.filter((cat) => cat.id !== pendingCategory.id));
      setToastOpen(true);
    }

    setDeleteDialogOpen(false);
    setPendingCategory(null);
  };

  if (categories) {
    return (
      <>
        <Container px={4} py={4}>
          <div style={{ width: '100%' }}>
            <Box display='flex'>
              <Box width='100%'>
                <Typography variant='h4' component='h1' gutterBottom>
                  Categorías
                </Typography>
              </Box>
              <Box>
                <Button
                  onClick={() => history.push(`${url}/create`)}
                  variant='contained'
                  color='primary'
                >
                  Crear
                </Button>
              </Box>
            </Box>
          </div>

          <List component='nav' aria-label='main mailbox folders'>
            {categories.map((category) => (
              <ListItem
                button
                key={category.id}
                component={Link}
                to={`/backoffice/categories/${category.id}/edit`}
              >
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={category.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleDeleteAction(category.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Container>
        {pendingCategory && (
          <AlertDelete
            message={`¿Eliminar la categoría "${pendingCategory.name}"?`}
            open={deleteDialogOpen}
            cancelar={handleDeleteCancel}
            confirmar={handleDeleteConfirm}
            onClose={handleDeleteCancel}
            snackbarOpen={toastOpen}
            snackbarMessage='Categoría eliminada'
            onSnackbarClose={() => setToastOpen(false)}
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
    return <h1>No hay categorias para mostrar.</h1>;
  }
};

export default Categories;
