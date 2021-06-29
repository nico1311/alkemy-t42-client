/** @module Utils/Alert */
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
// Styles for this components.
const useStyles = makeStyles(() => ({
  alertStyle: {
    width: '100%',
  },
}));
/**
 * Component AlertGenerator is react component to generate alerts with a minimum standard.
 * @fuction AlertGenerator
 * @param {String} [props.severity="error"] - A string to set "severity" is a type of alert between "error" is default, "warning", "info" and "success".
 * @param {String} [props.alertTitle] - A string to set title of alert.
 * @param {String} [props.contentText] - A string to set content in format text of the alert.
 * @example
 * import AlertGenerator from "components/utils/alert/AlertGenerator.js"
 * <AlertGenerator />
 * <AlertGenerator contentText="Default is a error" />
 * <AlertGenerator contentText="This is a alert warning" severity="warning" />
 * <AlertGenerator contentText="This is a alert info" severity="info" />
 * <AlertGenerator contentText="This is a alert sucess" severity="success" />
 */
const AlertGenerator = ({ severity = 'error', alertTitle, contentText }) => {
  const { alertStyle } = useStyles();
  return (
    <Alert className={alertStyle} severity={severity}>
      <AlertTitle>{alertTitle}</AlertTitle>
      {contentText}
    </Alert>
  );
};

export default AlertGenerator;
