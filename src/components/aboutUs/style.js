import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    member: {
      textAlign: 'center',
      margin: theme.spacing(2),
    },
    cardImage: {
      height: '15rem',
      objectFit: 'contain',
      objectPosition: 'center',
    },
    cardContent: {
      backgroundColor: '#9AC9FB',
    },
  };
});

export default useStyles;
