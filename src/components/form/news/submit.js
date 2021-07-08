/** @module Form/News */

const submit = async (values, setSubmit) => {
  setTimeout(() => {
    console.log(values);
    setSubmit(false);
  }, 2000);
};

export default submit;
