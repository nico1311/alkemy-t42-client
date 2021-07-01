/** @module services/http */
import { BASE_URL } from './settings';
/**
 * Function to make a generic request GET.
 * @async
 * @function makeGET
 * @param {String} APIURL - An endpoint for this request.
 * @example
 * import { makeGET } from "services/httpRequest";
 * const result = await makeGET("api/allcontacts")
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makeGET = async (APIURL) => {
  try {
    const response = await fetch(`${BASE_URL}/${APIURL}`, {
      Authorization: `bearer ${localStorage.getItem('token') || ''}`,
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
/**
 * Function to make a generic request POST.
 * @function makePOST
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makePOST } from 'services/httpRequest';
 * const myBodyRequest = {
 *  firstName: "Scarlett",
 *  lastName: "Johansson",
 *  mail: "scarsson@gmail.com",
 *  password: "blackwidow"
 * }
 * const result = await makePOST("api/register", myBodyRequest)
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePOST = async (APIURL, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${APIURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      Authorization: `bearer ${localStorage.getItem('token') || ''}`,
      body,
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
