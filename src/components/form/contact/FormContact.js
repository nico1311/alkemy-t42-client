/**@module Form/Contact */
import FormContainer from '../FormContainer.js';
import {
  FormControl,
  TextField,
  FormLabel,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useFormik } from 'formik';
import validate from './validation';
import submit from './submit';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(3),
  },
  formControl: {
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  button: {
    float: 'right',
  }
}));

/**
 * Component FormContact is a form for Contact section.
 * @function FormContact
 * @example
 * <FormContact /> 
 * import FormContact from 'components/forms/contact/FormContact.js'
 */

const FormContact = () => {
  const clases = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: async (values) => {
      submit(values);
  },
  })
  return (
    <FormContainer titleForm='Formulario de Contacto'>
      <form className={clases.form} onSubmit={formik.handleSubmit}>
        <FormControl className={clases.formControl}>
          <FormLabel required htmlFor='nameInput'>
            Nombre{' '}
          </FormLabel>
          <TextField id='name' type="text" onChange={formik.handleChange} defaultValue={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControl className={clases.formControl}>
          <FormLabel required htmlFor='emailInput'>
            Email de Contacto
          </FormLabel>
          <TextField id='email' type="email" onChange={formik.handleChange} defaultValue={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          />
        </FormControl>
        <FormControl className={clases.formControl}>
          <FormLabel required htmlFor='messageInput'>
            Mensaje{' '}
          </FormLabel>
          <TextField
            id='message'
            aria-describedby='my-helper-text'
            multiline
            rows={5}
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values.message}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </FormControl>
        <Button variant='contained' className={clases.button} color='secondary' type='submit'>
          Enviar
        </Button>
      </form>
    </FormContainer>
  );
};

export default FormContact;
