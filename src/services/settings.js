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
/**
 * Constant with ENDPOINT to contacts.
 * @constant
 * @readonly
 */
export const ENDPOINT_CONTACTS = `${BASE_URL}api/contacts`;
/**
 * Constant with ENDPOINT to users.
 * @constant
 * @readonly
 */
export const ENDPOINT_USER = `${BASE_URL}api/users`;
/**
 * Constant with ENDPOINT to news.
 * @constant
 * @readonly
 */
export const ENDPOINT_NEWS = `${BASE_URL}api/news`;
/**
 * Constant with ENDPOINT to auth me.
 * @constant
 * @readonly
 */
export const ENDPOINT_GETLOGGED = `${BASE_URL}api/auth/me`