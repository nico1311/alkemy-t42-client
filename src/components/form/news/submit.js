/** @module Form/News */

const submit = async (values, setSubmit, id = false) => {
  setTimeout(() => {
    console.log(values);
    setSubmit(false);
  }, 2000);
};

export default submit;
