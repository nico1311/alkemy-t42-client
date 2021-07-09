import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_CONTACTS} from 'services/settings';
import useFetch from 'hooks/useFetch';
import { getToken } from 'services/tokenHandler'

export default function ListOfContacts() {
  const { response, error, loading } = useFetch(ENDPOINT_CONTACTS, 
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    }
  )
  
  console.log(response)

  if(loading){
    return(
      <h1>Cargando...</h1>
    )
  }

  /*return(
    <>
      {response.contacts.map(res =>
        (<h1> {res.name} </h1>)  
      )}
    </> 
  )*/
}

/*const getContacts = () => {
  try {
    return makeRequest(`${ENDPOINT_CONTACT}`, "GET");
  } catch (error) {
    console.log(error);
  };
};

console.log(getContacts);*/

/*const ListOfContact = () => {
  
  return (
          <h1>Hola</h1>  
  );
};

export default ListOfContact;*/



/*const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}*/



/*export default function ListOfContacts() {
    const [ contacts, setContacts ] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/controllers/ContactsController'")
            .then((res) => {
                const data = res.data;
                setContacts(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    
    return console.log(contacts)
}

console.log()*/