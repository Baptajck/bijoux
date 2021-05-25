import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

export const login = (email, password) =>
  instance.post(`/users/login`, { email, password });

export const createUserToBdd = (
  firstName,
  lastName,
  email,
  password,
  address,
  city,
  phone
) =>
  instance.post(`/v1/user/save`, {
    firstName,
    lastName,
    email,
    password,
    address,
    city,
    phone,
  });

export const getUser = (userId, accessToken) =>
  instance.get(
    `/users/${userId}?filter[include]=roles&access_token=${accessToken}`
  );
export const changePassword = (oldPassword, newPassword, accessToken) =>
  instance.post(`users/changePassword?access_token=${accessToken}`, {
    oldPassword,
    newPassword,
  });
export default instance;
