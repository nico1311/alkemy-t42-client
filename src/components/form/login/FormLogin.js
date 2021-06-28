/** @module Form/Login */
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
 * Component FormLogin is react component to render a basic form login.
 * @fuction FormLogin
 * @param {String} [props.linkToSignUp="#"] - A string like a URL of redirect to SignUp.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * import FormLogin from "components/form/login/FormLogin.js"
 * <FormLogin />
 * <FormLogin linkToSignUp="/signup" />
 * <FormLogin linkToSignUp="http://anotherweb/signup" />
 * <FormLogin changeSubmit={myCustomSubmit} />
 */
const FormLogin = ({ linkToSignUp = '#', changeSubmit = submit }) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validation,
    onSubmit: (values, { setSubmitting }) => {
      changeSubmit(values, setSubmitting);
    },
  });
  return (
    <FormContainer titleForm='Sign IN'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
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
        {/* Button Submit */}
        <Button
          disabled={formik.isSubmitting}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          {formik.isSubmitting ? 'Loading...' : 'Sign In'}
        </Button>
        <Grid container justify='flex-end'>
          <Grid item>
            <Link href={linkToSignUp} variant='body2'>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default FormLogin;
