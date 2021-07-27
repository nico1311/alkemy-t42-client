/** @module Form */
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// Styles for this components.
const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
  },
}));
/**
 * Component FormContainer is react component to render a basic structure container for all forms.
 * @fuction FormContainer
 * @param {String} props.titleForm - A string to set a title for the form.
 * @example
 * import FormContainer from "components/form/FormContainer.js"
 * <FormContainer titleForm='Sign UP'>
 *    Children component or tags.
 * </FormContainer>
 * <FormContainer titleForm='Sign IN'></FormContainer>
 *    <FormLogin />
 * </FormContainer>
 */
const FormContainer = ({ children, titleForm }) => {
  const { paper } = useStyles();
  return (
    <Container component='main' maxWidth='xs' fixed>
      <section className={paper}></section>
      <Typography component='h4' variant='h5'>
        {titleForm}
      </Typography>
      {children}
    </Container>
  );
};

export default FormContainer;
