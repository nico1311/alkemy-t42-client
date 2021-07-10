import { ENDPOINT_CONTACTS} from 'services/settings';
import useFetch from 'hooks/useFetch';
import { getToken } from 'services/tokenHandler'

export default function ListOfContacts() {
  const { response, loading } = useFetch(ENDPOINT_CONTACTS, 
    {
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

  return null;
}