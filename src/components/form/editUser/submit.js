/** Submit's Function for EditUserForm
 * @function submit
 * @param {Object} {name, lastName, roleID} - form's values
 * @param {function} setSubmit - customize submit function
 * @param {function} setTypeMSJ - activates an alert
 */

const submit = async ({name, lastName, roleID}, setSubmit, setTypeMSJ) => {
    const results = {name, lastName, roleID};

    //There's no endpoint to update user yet

    console.log(results);
    setTypeMSJ('error');
    setSubmit(false);

};

export default submit;
