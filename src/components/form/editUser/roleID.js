import {
  FormControl,
  InputLabel,
  Select,
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
const RoleID = () => {
  return (
    <FormControl>
      <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
        Role ID:
      </InputLabel>
      <Select
        labelId='demo-simple-select-placeholder-label-label'
        id='demo-simple-select-placeholder-label'
        displayEmpty
      >
        <MenuItem>
          <em> </em>
        </MenuItem>
        <MenuItem value={10}>1 - Administrador</MenuItem>
        <MenuItem value={20}>2 - Standar</MenuItem>
      </Select>
      <FormHelperText>
        Esta opción sólo está disponible para administradores
      </FormHelperText>
    </FormControl>
  );
};

export default RoleID;
