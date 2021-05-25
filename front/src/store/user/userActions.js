/** Actions types **/
export const SET_INPUT = "SET_INPUT";
export const SAVE_USER = "SAVE_USER";
export const CREATE_USER = "CREATE_USER";

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
