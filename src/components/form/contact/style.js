import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginBottom: theme.spacing(6),
    paddingTop: '0px',
    marginTop: '0px',
  },
  formControl: {
    paddingTop: '0px',
    marginTop: '0px',
    alignSelf: 'flex-start',
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  button: {
    float: 'right',
  },
}));

export default useStyles;
