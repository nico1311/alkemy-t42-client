/** @module services */
/**
 * Constant with BASE URL to make requests.
 * @constant
 * @readonly
 */
const BASE_URL = 'http://localhost:4000/';
/**
 * Constant with ENDPOINT to register.
 * @constant
 * @readonly
 */
export const ENDPOINT_REGISTER = `${BASE_URL}api/auth/register`;
/**
 * Constant with ENDPOINT to login.
 * @constant
 * @readonly
 */
export const ENDPOINT_LOGIN = `${BASE_URL}api/auth/login`;
/**
 * Constant with ENDPOINT to organizations.
 * @constant
 * @readonly
 */
export const ENDPOINT_ORGANIZATION = `${BASE_URL}api/organizations/1/public`;
