import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(1, 3),
      textAlign: 'center',
      margin: theme.spacing(2)
    },
    media: {
      width: '100%',
      maxWidth: '50vh',
      objectFit: 'contain',
      objectPosition: 'center',
    },
    content: {
      padding: theme.spacing(5, 1),
      backgroundColor: '#99CCFF',
    },
  };
});

export default useStyles;
