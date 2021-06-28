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
  if (!firstName) return 'Required';
  else if (firstName.length > 18) return 'Must be 18 characters or less.';
  else if (firstName.length < 2) return 'Must be 2 characters or more.';
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
  if (!lastName) return 'Required';
  else if (lastName.length > 18) return 'Must be 18 characters or less.';
  else if (lastName.length < 2) return 'Must be 2 characters or more.';
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
  if (!email) return 'Required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return 'Invalid email address.';
  else if (email.length > 64) return 'Must be 64 characters or less.';
  else if (email.length < 2) return 'Must be 2 characters or more.';
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
  if (!password) return 'Required';
  else if (password.length < 6) return 'Must be 6 characters or more.';
  else if (password.length > 32) return 'Must be 32 characters or less.';
};
