/**
 * Function to logout a user from client.
 * @async
 * @function logout
 * @param {String} localStorageItem - It's a key of localStarage identificator.
 * @param {Function} dispatch - It's a dispatcher function, from storage of redux or use.
 * @example
 * import { logout } from "services/auth";
 * logout();
 * @example
 * import { logout } from "services/auth";
 * logout("token"); // Delete item token, from localStorage.
 * @example
 * import { logout } from "services/auth";
 * import { userLogout } from "redux/user/actions/user"
 * import { useDispatch } from 'react-redux'
 * const dispatch = useDispatch();
 * logout("token", dispatch(userLogout())); // Delete item token, from localStorage and run dispatch.
 */
export const logout = (localStorageItem = 'user', dispatch = null) => {
  localStorage.removeItem(localStorageItem);
  // If not setted a function for dispath, function done.
  if (!dispatch) return null;
  // If dispatch is setted, run that dispatch.
  dispatch();
};
