/** Actions types **/
export const SET_INPUT = "SET_INPUT";
export const CREATE_USER = "CREATE_USER";

/** Actions creators **/
export const setInput = (name, value) => ({
  type: SET_INPUT,
  name,
  value,
});

export const createUser = (
  firstName,
  lastName,
  email,
  password,
  address,
  city,
  phone
) => ({
  type: CREATE_USER,
  firstName,
  lastName,
  email,
  password,
  address,
  city,
  phone,
});
