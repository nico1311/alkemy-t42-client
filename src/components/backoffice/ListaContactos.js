import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { ENDPOINT_CONTACTS} from 'services/settings';
import useFetch from 'hooks/useFetch';
import { getToken } from 'services/tokenHandler'

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function ListOfContacts() {
  const history = useHistory()
  const { response, loading } = useFetch(ENDPOINT_CONTACTS, 
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    }
  )
  const classes = useStyles();

  if(loading){
    return(
      <h1>Cargando...</h1>
    )
  }

  if(response?.contacts){
    return (
      <>
        <h1 align='center'> Contactos</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mensaje</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {response.contacts.map((res, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{res.name}</TableCell>
                  <TableCell align="center">{res.email}</TableCell>
                  <TableCell onClick={() => history.push(`/backoffice/lista-contactos/${res.contactId}/${res.message || 'Mensaje generico'}`)} align="center"><Button>Mensaje</Button></TableCell>
                  <TableCell align="center"><Link to="/backoffice/lista-contactos">Editar</Link></TableCell>
                  <TableCell align="center"><Link to="/backoffice/lista-contactos">Eliminar</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return null;
}

