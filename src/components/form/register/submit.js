/** @module Form/Register */
import { makePOST } from 'services/httpRequest';
/**
 * Function submit default of component Form Register. If register is correct, redirect to "/", else we change state of funcion callback "setShowError" to true.
 * @function submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @param {Function} setShowError - A function to handle show alert/text/etc of error or not.
 * @param {Function} redirect - A function to invoke a redirect with router select by devs.
 * @example
 * import FormRegister from "components/form/register/FormRegister.js"
 * import submit from "components/form/register/submit.js";
 * <FormRegister /> // Default version use this module, that is implicit.
 * <FormRegister changeSubmit={submit} /> // This is explicit.
 */
const submit = async (
  { firstName, lastName, email, password },
  setSubmit,
  setShowError,
  redirect,
) => {
  const result = await makePOST('api/auth/register', {
    firstName,
    lastName,
    email,
    password,
  });
  if (!result.ok) setShowError(true);
  else redirect('/');
  setSubmit(false);
};

export default submit;
