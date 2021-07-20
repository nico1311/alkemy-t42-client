import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(1, 3),
    },
    media: {
      width: '100%',
      maxWidth: '65vh',
      objectFit: 'contain',
      objectPosition: 'center',
    },
    content: {
      padding: theme.spacing(4, 1),
      backgroundColor: '#99CCFF',
    },
  };
});

export default useStyles;
