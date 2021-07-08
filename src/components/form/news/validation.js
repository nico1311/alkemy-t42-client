/** @module Form/Register */
import {
  validationTitle,
  validationImage,
  validationCategory,
  validationContain,
} from '../utilValidation';
/**
 * Function to know if predeterminate values are valid. Check values for title, image, category and contain in a object in form register.
 * @fuction validation
 * @param {String} values.title - A string.
 * @param {String} values.image - A string.
 * @param {String} values.category - A string.
 * @param {String} values.contain - A string.
 * @example
 * validation(myObjectWithValues); // Return an object error with results.
 * @returns {Object} Returns object Error.
 */
const validation = ({ title, image, category, contain }) => {
  const errors = {};
  // Check Title.
  const isValidTitle = validationTitle(title);
  if (isValidTitle) errors.title = isValidTitle;
  // Check Image.
  const isValidImage = validationImage(image);
  if (isValidImage) errors.image = isValidImage;
  return errors;
};

export default validation;
