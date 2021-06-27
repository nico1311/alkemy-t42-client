/** @module Form/Login */
/**
 * Function submit default of component Form Login. You can change for custom function of onSubmit or submit.
 * @fuction submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @example
 * import FormLogin from "components/form/login/FormLogin.js"
 * import submit from "components/form/login/submit.js";
 * <FormLogin /> // Default version use this module, that is implicit.
 * <FormLogin changeSubmit={submit} /> // This is explicit.
 */
const submit = (values, setSubmit) => {
  setTimeout(() => {
    const userLoginObject = { ...values };
    console.log(userLoginObject);
    setSubmit(false);
    return userLoginObject;
  }, 2000);
};

export default submit;
