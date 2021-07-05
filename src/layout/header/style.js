import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  offset: {
    position: 'sticky',
  },
  logo: {
    width: '5rem',
  },
  root: {
    flexGrow: 1,
  },
  split: {
    marginRight: '10px',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconButtonContainer: {
    color: 'white',
  },
  menuIconToggle: {
    fontSize: '3rem',
  },
  container: {
    justifyContent: 'end',
    flexWrap: 'no-wrap',
  },

  noMinWidth: {
    minWidth: '0',
  },
  drawer: {
    width: '100%',
    alignSelf: 'flex-end',
  },
  spaced: {
    justifyContent: 'space-between',
  },
}));

export default useStyles;

