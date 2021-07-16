import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';

import AlertDelete from 'components/utils/alertDelete/AlertDelete';

import { makeGET, makeDELETE } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [pendingCategory, setPendingCategory] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    makeGET(ENDPOINT_CATEGORY).then((data) => {
      setCategories(data.categories);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  const handleDeleteAction = (categoryId) => {
    setPendingCategory(categories.find((cat) => cat.id === categoryId));
    setDeleteDialogOpen(true);
  }

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setPendingCategory(null);
  }

  const handleDeleteConfirm = () => {
    makeDELETE(`${ENDPOINT_CATEGORY}/${pendingCategory.id}`).then(() => {
      setCategories(categories.filter((cat) => cat.id !== pendingCategory.id));
      setToastOpen(true);
    }).catch((err) => {
      console.error('Error deleting category: ', err);
    }).finally(() => {
      setDeleteDialogOpen(false);
      setPendingCategory(null);
    });
  }

  return (
    <>
      <Container px={4} py={4}>
        <Typography variant='h4' component='h1' gutterBottom>
            Categorías
        </Typography>
        <List component="nav" aria-label="main mailbox folders">
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
                  <IconButton aria-label="delete" onClick={() => handleDeleteAction(category.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
            </ListItem>          
          ))}
        </List>
      </Container>
      {pendingCategory && 
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
      }
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
}

export default Categories;
