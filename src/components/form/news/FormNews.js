/** @module Form/News */
import { useFormik } from 'formik';
import validation from './validation';
import submit from './submit';
import FormContainer from '../FormContainer.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
/**
 * Component FormNews is react component to render a basic form news and edit.
 * @function FormNews
 * @param {Object} prevNews - An object with attributes of previous news to edit.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * import FormNews from "components/form/News/FormNews.js"
 * <FormNews />
 * <FormNews changeSubmit={myCustomSubmit} />
 */
const FormNews = ({ prevNews = {}, changeSubmit = submit }) => {
  // React Router function to redirect user if register is correct.
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
    },
    validate: validation,
    onSubmit: (values, { setSubmitting }) => {
      changeSubmit(values, setSubmitting);
    },
  });
  return (
    <FormContainer titleForm='Formulario Novedades'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Input title */}
          <Grid item xs={12}>
            <TextField
              autoComplete='ftitle'
              name='title'
              variant='outlined'
              required
              fullWidth
              id='title'
              label='Título'
              autoFocus
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          {/* Input file image */}
          <Grid
            item
            xs={12}
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <FormLabel required htmlFor='image'>
              Archivo de Imagen:
            </FormLabel>
            <Button color='primary' variant='contained' component='label'>
              Subir Archivo
              <Input
                id='image'
                name='image'
                type='file'
                style={{ display: 'none' }}
                accept='image/*'
                fullWidth
                onChange={(event) => {
                  formik.setFieldValue('image', event.currentTarget.files[0]);
                }}
              />
            </Button>
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
            {formik.isSubmitting ? 'Cargando...' : 'Enviar'}
          </Button>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default FormNews;
