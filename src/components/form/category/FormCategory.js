/**@module Form/Category */
import { useState } from 'react';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import FormContainer from '../FormContainer.js';
import { Grid, TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import validate from './validation';
import submit from './submit';
import useStyles from './style';
/**
 * Component FormCategory is a form for category section.
 * @function FormCategory
 * @param {Object} prevCategory - An object with attributes of previous category to edit.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * // Example for new category.
 * import FormCategory from 'components/forms/category/FormCategory.js'
 * <FormCategory />
 * @example
 * // Example for edit category.
 * import FormCategory from 'components/forms/category/FormCategory.js'
 * <FormCategory prevCategory={{name: "Ocio", description: "Una categoría para cosas relacionadas al oceo."}} />
 */
const FormCategory = ({ prevCategory = null, changeSubmit = submit }) => {
  // State to handler alert error/success show/hide.
  const [typeMSJ, setTypeMSJ] = useState();
  const clases = useStyles();
  const formik = useFormik({
    initialValues: {
      name: prevCategory ? prevCategory.name : '',
      description: prevCategory ? prevCategory.description : '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      changeSubmit(values, setSubmitting, setTypeMSJ);
    },
  });
  return (
    <FormContainer
      titleForm={
        prevCategory
          ? 'Formulario Crear Nueva Categoría'
          : 'Formulario Editar Categoría'
      }
    >
      <form className={clases.form} onSubmit={formik.handleSubmit}>
        {/* Input name */}
        <Grid item xs={12}>
          <TextField
            autoFocus
            variant='outlined'
            required
            fullWidth
            id='name'
            label='Nombre Categoría'
            name='name'
            autoComplete='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        {/* Input description */}
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='description'
            label='Descripción Categoría'
            name='description'
            autoComplete='description'
            multiline
            rows={6}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        {/* Button for submit form */}
        <Button
          disabled={formik.isSubmitting}
          variant='contained'
          className={clases.button}
          color='secondary'
          type='submit'
        >
          Enviar
        </Button>
        {/* Alert if is success or error */}
        {typeMSJ === 'success' && (
          <AlertGenerator
            alertTitle='Success:'
            contentText='Se ha enviado con exito el formulario de categoria. Gracias.'
            variant='filled'
            severity='success'
            className={clases.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, un error a ocurrido con su intento por enviar este formulario de categoría. Por favor, contactar con el soporte.'
            variant='filled'
            className={clases.alert}
          />
        )}
      </form>
    </FormContainer>
  );
};

export default FormCategory;
