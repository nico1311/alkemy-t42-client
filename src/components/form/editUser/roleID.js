import {
  FormControl,
  InputLabel,
  NativeSelect,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';


/**
 * This component is part from EditUserForm but it only renderizes itself when isBackOffice's prop is true 
 * (A user shouldn't be able to change its own roleID)
 * @function RoleID
 * @example
 * import RoleID from './roleID.js'
 * <RoleID></RoleID>
 */
const RoleID = ({role}) => {
  return (
    <FormControl>
      <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
        Role ID:
      </InputLabel>
      <NativeSelect
        labelId='demo-simple-select-placeholder-label-label'
        id='demo-simple-select-placeholder-label'
        defaultValue={role}
      >
        <option value={1}>1 - Administrador</option>
        <option value={2}>2 - Standar</option>
      </NativeSelect>
      <FormHelperText>
        Esta opción sólo está disponible para administradores
      </FormHelperText>
    </FormControl>
  );
};

export default RoleID;
