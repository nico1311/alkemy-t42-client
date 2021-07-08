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
/**
 * Function to validate title for forms.
 * @fuction validationTitle
 * @param {String} title - A string to check.
 * @example
 * validationFirstName("My News");
 * validationFirstName("N");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationTitle = (title) => {
  if (!title) return 'Requerido';
  else if (title.length > 18) return 'Como máximo 18 caracteres.';
  else if (title.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate images for forms.
 * @fuction validationImage
 * @param {Object} Image - An object with data of Image to check.
 * @example
 * validationFirstName(myImage);
 * @returns {String} Returns string to set in an object Error.
 */
export const validationImage = (image) => {
  if (!image) return 'Requerido';
  else if (!image.name) return 'Requerido';
  else if (!/\.(gif|jpe?g|png|webp|bmp)$/i.test(image.name))
    return 'El archivo debe ser una imagen y su extensión debe ser un .git, .jpg, .png, .webp, .bmp.';
  else if (image.size > 2 * 1024 * 1024)
    return 'El tamaño del archivo es demasiado grande. No debe superar los 2 mb.';
};
export const validationCategory = (category) => {
  if (!category) return 'Requerido';
  else if (category.length > 18) return 'Como máximo 18 caracteres.';
  else if (category.length < 2) return 'Debe contener 2 caracteres o más.';
};
export const validationContain = (contain) => {
  if (!contain) return 'Requerido';
  else if (contain.length > 18) return 'Como máximo 18 caracteres.';
  else if (contain.length < 2) return 'Debe contener 2 caracteres o más.';
};
