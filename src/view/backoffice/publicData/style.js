import { makeStyles } from '@material-ui/core';
/** Styles for PublicData view in backoffice
 * @function useStyles
 * @example
 * import useStyles from './style.js'
 * const classes = useStyles();
 */
const useStyles = makeStyles((theme) => {
  return {
    title: {
      margin: theme.spacing(5, 0),
    },
  };
});

export default useStyles;
