import FormContainer from '../FormContainer.js';
import {
  FormControl,
  Input,
  FormLabel,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useFormik } from 'formik';
import validate from './validation';

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

const FormContact = () => {
  const clases = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: values => {

    alert(JSON.stringify(values, null, 2));

  },
  })
  return (
    <FormContainer titleForm='Contacto'>
      <form className={clases.form} onSubmit={formik.handleSubmit}>
        <FormControl className={clases.formControl}>
          <FormLabel required htmlFor='nameInput'>
            Nombre{' '}
          </FormLabel>
          <Input id='name' type="text" onChange={formik.handleChange} defaultValue={formik.values.name}/>
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </FormControl>
        <FormControl className={clases.formControl}>
          <FormLabel required htmlFor='emailInput'>
            Email de Contacto
          </FormLabel>
          <Input id='email' type="email" onChange={formik.handleChange} defaultValue={formik.values.email} />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </FormControl>
        <FormControl className={clases.formControl}>
          <FormLabel required htmlFor='messageInput'>
            Mensaje{' '}
          </FormLabel>
          <Input
            id='message'
            aria-describedby='my-helper-text'
            multiline
            rows={5}
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values.message}
          />
          {formik.errors.message ? <div>{formik.errors.message}</div> : null}
        </FormControl>
        <Button variant='contained' className={clases.button} color='secondary' type='submit'>
          Enviar
        </Button>
      </form>
    </FormContainer>
  );
};

export default FormContact;
