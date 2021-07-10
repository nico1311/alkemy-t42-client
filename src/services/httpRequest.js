/** @module services/http */
/**
 * Constant with BASE URL to make requests.
 * @constant
 * @readonly
 */
const TOKENJWT = localStorage.getItem('TOKEN_KEY') || '';
/**
 * Function to make a generic request GET.
 * @async
 * @function makeGET
 * @param {String} APIURL - An endpoint for this request.
 * @example
 * import { makeGET } from "services/httpRequest";
 * import { ENDPOINT_ALLCONTACTS } from "services/settings";
 * const result = await makeGET(ENDPOINT_ALLCONTACTS);
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makeGET = async (APIURL) => {
  try {
    const res = await fetch(APIURL, {
      headers: { 'Content-Type': 'application/json',
      Authorization: TOKENJWT,
     },
    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
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
 * const result = await makePOST("http://localhost:4000/api/auth/register", myBodyRequest);
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePOST = async (APIURL, body) => {
  try {
    const res = await fetch(APIURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      Authorization: TOKENJWT,
     },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
/**
 * Function to make a generic request PUT.
 * @function makePUT
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makePUT } from 'services/httpRequest';
 * const myBodyRequest = {
 *  firstName: "Black",
 *  lastName: "Widow",
 *  password: "blackwidow"
 * }
 * const result = await makePUT("http://localhost:4000/api/auth/updatereg", myBodyRequest);
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePUT = async (APIURL, body) => {
  try {
    const res = await fetch(APIURL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      Authorization: TOKENJWT,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
/**
 * Function to make a generic request PATCH.
 * @function makePATCH
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makePATCH } from 'services/httpRequest';
 * const result = await makePATCH("http://localhost:4000/api/auth/patchreg", {password: "blackwidow"});
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePATCH = async (APIURL, body) => {
  try {
    const res = await fetch(APIURL, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      Authorization: TOKENJWT,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
/**
 * Function to make a generic request DELETE.
 * @function makeDELETE
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makeDELETE } from 'services/httpRequest';
 * const result = await makeDELETE("http://localhost:4000/api/deleteuser");
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makeDELETE = async (APIURL, body) => {
  try {
    const res = await fetch(APIURL, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      Authorization: TOKENJWT,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
