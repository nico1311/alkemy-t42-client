/** @module Form/Register */
/**
 * Function submit default of component Form Register. You can change for custom function of onSubmit or submit.
 * @fuction submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @example
 * import FormRegister from "components/form/register/FormRegister.js"
 * import submit from "components/form/register/submit.js";
 * <FormRegister /> // Default version use this module, that is implicit.
 * <FormRegister changeSubmit={submit} /> // This is explicit.
 */
const submit = (values, setSubmit) => {
  setTimeout(() => {
    const userRegisterObject = { ...values };
    console.log(userRegisterObject);
    setSubmit(false);
    return userRegisterObject;
  }, 2000);
};

export default submit;
