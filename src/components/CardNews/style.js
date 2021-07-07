import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    item: {
      marginTop: '15vh',
      marginBottom: '5vh',
      marginInline: '1vw',
      minWidth: '22vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '20px 20px 10px -10px rgba(0,0,0,0.3)',
      [theme.breakpoints.down('md')]: {
        minWidth: '95vw',
        marginTop: '10vh',
      },
      [theme.breakpoints.down('lg')]: {
        minWidth: '22vw',
        marginTop: '10vh',
      },
    },
    title: {
      fontSize: '1.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#094b87',
    },
    pos: {
      margin: '2vh',
      textAlign: 'center',
      padding: '1vw',
    },
  };
});

export default useStyles;
