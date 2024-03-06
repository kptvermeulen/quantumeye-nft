const LOCAL_URL = "http://localhost:3001";
const API_URL = "http://188.166.43.74:3001";

const PRODUCTION = false;
export const version = "0.2.0.3";

const SERVER_URL = PRODUCTION ? API_URL : LOCAL_URL;

export const REGISTER_URL = SERVER_URL + "/register";
export const LOGIN_URL = SERVER_URL + "/login";
export const GETUSER_URL = SERVER_URL + "/get-user";

export const INSERT_IMAGE_URL = SERVER_URL + "/insert-image";
export const GETIMAGE = SERVER_URL + "/get-image";
