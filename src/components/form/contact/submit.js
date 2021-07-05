/**Manage and customize submit function for contact form.
 * @function submit
 * @param {Object} values an object with all the params validated by formik
 * @example
 * import submit from 'components/form/contact/submit.js'
 * */
const submit = (values) => {
  setTimeout(() => {
    const contactObject = { ...values };

    console.log(contactObject);
    //Here it'd be HTTP petition

    return contactObject;
  }, 2000);
};

export default submit;
