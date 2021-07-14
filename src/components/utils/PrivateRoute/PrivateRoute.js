import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

/**@module utils/PrivateRoute */
/**
 *  Component that manages the access to a private route
 * @param {Component} component Component to render
 * @param {String} redirectTo Route for redirection
 * @param {boolean} shouldBeAdmin Bool for control private routes only admin user can use. Default: true 
 * @param {props} rest The rest of props
 * @returns a Route component
 * @example
 * import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute.js'
 * <PrivateRoute path="/activities" component={ActivitiesView} redirectTo={'/home'} shouldBeAdmin={false} /> //If route is for regular user authenticated
 * <PrivateRoute path="/activities" component={ActivitiesView} redirectTo={'/home'} /> //If route is for admin user only, because default is 'true'
 */

export default function PrivateRoute({
  component: Component,
  redirectTo,
  shouldBeAdmin,
  ...rest
}) {
  
  const auth = useSelector(state => state.user.user ? true : false);
  const adminIsUser = useSelector(state => state.user.user?.roleId === 1 ? true : false)
  const [permitted, setPermitted] = useState(true)

  useEffect(() => {
    if(shouldBeAdmin){
      setPermitted(adminIsUser)
    } else {
      setPermitted(auth)
    }
  }, [adminIsUser, auth, shouldBeAdmin])

  return (
    <Route {...rest}>
      {permitted ? <Component /> : <Redirect to={redirectTo} />}
    </Route>
  );
}
