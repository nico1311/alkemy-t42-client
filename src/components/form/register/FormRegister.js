/** @module Form/Register */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { useFormik } from 'formik';
import validation from './validation';
import submit from './submit';
import FormContainer from '../FormContainer.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Styles for this components.
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    height: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/**
 * Component FormRegister is react component to render a basic form register.
 * @function FormRegister
 * @param {String} [props.linkToSignIn="#"] - A string like a URL of redirect to SignIn
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * import FormRegister from "components/form/register/FormRegister.js"
 *
 * <FormRegister />
 * <FormRegister linkToSignIn="/signin" />
 * <FormRegister linkToSignIn="http://anotherweb/SignIn" />
 * <FormRegister changeSubmit={myCustomSubmit} />
 */
const FormRegister = ({ linkToSignIn = '#', changeSubmit = submit }) => {
  // State to handler alert error show/hide.
  const [errorReturnForm, setErrorReturnForm] = useState(false);
  // React Router function to redirect user if register is correct.
  const history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: validation,
    onSubmit: (values, { setSubmitting }) => {
      changeSubmit(values, setSubmitting, setErrorReturnForm, history.push);
    },
  });
  return (
    <FormContainer titleForm='Sign UP'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Input FirstName */}
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='fname'
              name='firstName'
              variant='outlined'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          {/* Input LastName */}
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          {/* Input Email */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          {/* Input Password */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </Grid>
        {/* Error Alert if form return back a error */}
        {errorReturnForm || (
          <AlertGenerator
            alertTitle='Error:'
            contentText='This is a alert success'
            variant='filled'
          />
        )}
        {/* Button Submit */}
        <Button
          disabled={formik.isSubmitting}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          {formik.isSubmitting ? 'Loading...' : 'Sign Up'}
        </Button>
        <Grid container justify='flex-end'>
          <Grid item>
            <Link href={linkToSignIn} variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default FormRegister;
