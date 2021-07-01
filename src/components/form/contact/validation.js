import {validationEmail, validationFirstName, validationMesssage} from './../utilValidation';

const validate = ({email, name, message}) => {
    const errors = {};

    const isValidEmail = validationEmail(email);
    if(isValidEmail) errors.email = isValidEmail;

    const isValidName = validationFirstName(name);
    if(isValidName) errors.name = isValidName;

    const isValidMessage = validationMesssage(message);
    if(isValidMessage) errors.message = isValidMessage;

    return errors
}

export default validate;