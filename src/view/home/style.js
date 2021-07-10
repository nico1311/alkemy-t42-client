import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    pageTitle: {
      margin: '4vh',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3em',
      },
    },
    welcomeMsg: {
      fontSize: '5em',
      margin: '5vh',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2em',
      },
    },
    root: {
      width: '100%',
    },
  };
});

export default useStyles;

