/** @module Form */
/**
 * Function to validate first name for forms.
 * @fuction validationFirstName
 * @param {String} firstName - A string to check.
 * @example
 * validationFirstName("Brendam");
 * validationFirstName("B");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationFirstName = (firstName) => {
  if (!firstName) return 'Requerido';
  else if (firstName.length > 18) return 'Como máximo 18 caracteres.';
  else if (firstName.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate last name for forms.
 * @fuction validationLastName
 * @param {String} lastName - A string to check.
 * @example
 * validationLastName("Einch");
 * validationLastName("E");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationLastName = (lastName) => {
  if (!lastName) return 'Requerido';
  else if (lastName.length > 18) return 'Como máximo 18 caracteres.';
  else if (lastName.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate email for forms.
 * @fuction validationEmail
 * @param {String} email - A string to check.
 * @example
 * validationEmail("BrendamEinch@gmail.com");
 * validationEmail("Enbrem");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationEmail = (email) => {
  if (!email) return 'Requerido';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return 'Invalid email address.';
  else if (email.length > 64) return 'Debe contener mas de 64 caracteres.';
  else if (email.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate password for forms.
 * @fuction validationPassword
 * @param {String} password - A string to check.
 * @example
 * validationPassword("123456");
 * validationPassword("1234);
 * @returns {String} Returns string to set in an object Error.
 */
export const validationPassword = (password) => {
  if (!password) return 'Requerido';
  else if (password.length < 6) return 'Debe contener 6 caracteres o más.';
  else if (password.length > 32)
    return 'Debe contener un máximo de 32 caracteres.';
};

/**Function to validate message for forms
 * @function validationMessage
 * @param {String} message -A string to check.
 * @example
 * validationMessage("Your message should be larger than 30 characters.")
 * validationMessage("Incorrect message.")
 * @returns {String} Returns string to set in an object Error.
 */

export const validationMessage = (message) => {
  if (!message) return 'Requerido';
  else if (message.length < 30) return 'Debe contener 30 caracteres o más.';
};
