/** Actions types **/
export const SET_INPUT = "SET_INPUT";
export const SAVE_USER = "SAVE_USER";
export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SAVE_USER_LOGIN = "SAVE_USER_LOGIN";

/** Actions creators **/
export const setInput = (name, value) => ({
  type: SET_INPUT,
  name,
  value,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const createUser = (password) => ({
  type: CREATE_USER,
  password,
});

export const login = (password) => ({
  type: LOGIN_USER,
  password,
});

export const saveUserLogin = (token, user) => ({
  type: SAVE_USER_LOGIN,
  token,
  user,
});
