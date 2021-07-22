import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    member: {
      textAlign: 'center',
      margin: theme.spacing(2),
    },
    cardImage: {
      height: '14rem',
      objectFit: 'contain',
      objectPosition: 'center',
      borderRadius: "30%",
      padding: '2vh'
    },
    cardContent: {
      backgroundColor: '#9AC9FB',
    },
  };
});

export default useStyles;
