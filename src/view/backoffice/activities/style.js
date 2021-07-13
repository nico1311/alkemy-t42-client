import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      margin: theme.spacing(1),
    },
    buttonEdit: {
      backgroundColor: '#EE9944',
      '&:hover': {
        backgroundColor: '#e07a14',
      },
    },
    buttonSend: {
      backgroundColor: '#339966',
      '&:hover': {
        backgroundColor: '#2B612E',
      },
    },
    right: {
      textAlign: 'end',
    },
  };
});

export default useStyles;
