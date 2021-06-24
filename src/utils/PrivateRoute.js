import {Route, Redirect} from 'react-router-dom'

/**
 *  Component that manages the access to a private route
 * @param {Component} component Component to render
 * @param {String} redirectTo Route for redirection
 * @param {props} rest The rest of props
 * @returns a Route component
 */

export default function PrivateRoute({ component: Component, redirectTo ,...rest }) {
  //Manejar la logica de la autenticacion/permisos y guardar el resultado final (si o no) en algun booleano, este ej 'auth'
  const auth = false
  if(!auth)alert('La ruta es privada')
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to={redirectTo} />}</Route>
  );
}
