import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

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

export default instance;
