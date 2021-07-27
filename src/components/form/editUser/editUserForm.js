import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FormContainer from '../FormContainer.js';
import { FormControl, TextField, FormLabel, Button } from '@material-ui/core';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { useFormik } from 'formik';
import useStyles from './style';
import RoleID from './roleID';
import validate from './validate';
import submit from './submit';

/**
 * Component EditUserForm will be use by the user to edit its own account (name and lastname) and by the admin to edit
 * any user's information (name, lastname and roleid)
 * @function EditUserForm
 * @param {Object} userInfo -{name: string, lastName: string, roleID: 1 or 2}
 * @example
 * import EditUserForm from 'components/forms/contact/editUserForm.js'
 * <EditUserForm isBackOffice={true} userInfo={name:'Example', lastName:'Test', roleID:1} />
 */

const EditUserForm = ({userInfo}) => {
  // State to handler alert error show/hide.
  const isBackOffice = useSelector((state) => state.user.user.roleId);
  const [typeMSJ, setTypeMSJ] = useState();
  const classes = useStyles();

  

  const formik = useFormik({
    initialValues: {
      name: userInfo.firstName,
      lastName: userInfo.lastName,
      roleID: userInfo.roleId,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      submit(values, setSubmitting, setTypeMSJ);
    },
  });

  console.log(formik.values);
  return (
    <FormContainer titleForm='Editar Usuario'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='nameInput'>Nombre: </FormLabel>
          <TextField
            id='name'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='lastNameInput'>Apellido: </FormLabel>
          <TextField
            id='lastName'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </FormControl>
        {isBackOffice === 1 ? <RoleID role={formik.values.roleID}></RoleID> : null}
        <div className={classes.buttonContainer}>
          <Button
            disabled={formik.isSubmitting}
            variant='contained'
            color='primary'
            className={classes.button}
            type='submit'
          >
            Enviar
          </Button>
        </div>
        {/* Alert if is success or error */}
        {typeMSJ === 'success' && (
          <AlertGenerator
            alertTitle='Success:'
            contentText='Se ha enviado con exito el formulario de contacto. Tendrá una respuesta lo más pronto posible. Gracias.'
            variant='filled'
            severity='success'
            className={classes.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, un error a ocurrido con su intento por enviar este formulario de contacto. Por favor, contactar con el soporte.'
            variant='filled'
            className={classes.alert}
          />
        )}
      </form>
    </FormContainer>
  );
}

export default EditUserForm;
