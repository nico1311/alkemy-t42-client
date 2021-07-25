/** @module Form/News */
import { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validation from './validation';
import submit from './submit';
import FormContainer from '../FormContainer.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * Component FormNews is react component to render a basic form news and edit.
 * @function FormNews
 * @param {Object} prevNews - An object with attributes of previous news to edit.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * // Example for News.
 * import FormNews from "components/form/News/FormNews.js"
 * <FormNews />
 * <FormNews changeSubmit={myCustomSubmit} />
 * @example
 * // Example for Edit.
 * import FormEdit from "components/form/News/FormNews.js"
 * const myNewsToEdit = {id, title, image, category, contain};
 * <FormEdit prevNews={myNewsToEdit} />
 */

const FormNews = ({ prevNews = null, changeSubmit = submit }) => {
  const [imgPreview, setImgPreview] = useState(null);
  const dispatch = useDispatch();
  // React Router function to redirect user if register is correct.
  const [categories, setCategories] = useState([]);
  const [imageURL, setImageURL] = useState([false]);
  const [imageFile, setImageFile] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await makeGET(ENDPOINT_CATEGORY);
      setCategories(data.categories);
    }
  fetchCategories();
  }, []);
  
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: prevNews ? prevNews.title : '',
      image: prevNews ? prevNews.image : '',
      category: prevNews ? prevNews.category : '',
      contain: prevNews ? prevNews.contain : '',
    },
    validate: validation,
    onSubmit: (values, { setSubmitting }) => {
      changeSubmit(values, setSubmitting, prevNews?.id, dispatch);
    },
  });

  return (
    <FormContainer titleForm='Formulario Novedades'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Input title */}
          <Grid item xs={12}>
            <FormLabel required htmlFor='title'>
              Título:
            </FormLabel>
            <TextField
              autoComplete='ftitle'
              name='title'
              variant='outlined'
              required
              fullWidth
              id='title'
              autoFocus
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          {/* Input category */}
          <Grid item xs={12}>
            <FormLabel required htmlFor='category'>
              Categorías:
            </FormLabel>
            <Select
              required
              className={classes.select}
              id='category'
              name='category'
              variant='outlined'
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              {categories.map((category, i) => (
                <MenuItem key={i} value={category}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>
              {formik.touched.category && formik.errors.category}
            </FormHelperText>
          </Grid>
          {/* Input file image */}
          <Grid item xs={12}>
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
                    setImgPreview(
                      URL.createObjectURL(event.currentTarget.files[0]),
                    );
                  }}
                />
              </Button>
            </Grid>
            {imgPreview && !formik.errors.image && (
              <img
                className={classes.imgPreview}
                alt='Upload img'
                src={imgPreview}
              />
            )}
            <FormHelperText style={{ color: 'red' }}>
              {!formik.touched.image && formik.errors.image}
            </FormHelperText>
          </Grid>
          {/* Input contain in CKEDITOR */}
          <Grid item xs={12}>
            <CKEditor
              id='contain'
              editor={ClassicEditor}
              data={
                prevNews ? prevNews.contain : '¡Escribe el contenido, Aquí!'
              }
              value={formik.values.contain}
              onChange={(event, editor) => {
                formik.setFieldValue('contain', editor.getData());
              }}
            />
            <FormHelperText style={{ color: 'red' }}>
              {formik.touched.contain && formik.errors.contain}
            </FormHelperText>
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
