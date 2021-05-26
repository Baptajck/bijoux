import { push } from "connected-react-router";
import { createUserToBdd, loginUser } from "../api/backend.instance";
import {
  CREATE_USER,
  saveUser,
  LOGIN_USER,
  saveUserLogin,
} from "./userActions";

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_USER:
      {
        const { password } = action;
        const { firstName, lastName, email, address, city, phone } =
          state.userReducer;
        createUserToBdd(
          firstName,
          lastName,
          email,
          password,
          address,
          city,
          phone
        )
          .then((res) => {
            store.dispatch(saveUser());
          })
          .catch((err) => console.error(err));
        next(action);
      }
      break;

    case LOGIN_USER:
      {
        const { password } = action;
        const { email } = state.userReducer;

        loginUser(email, password)
          .then(({ data: { token, user } }) => {
            store.dispatch(saveUserLogin(token, user));
            store.dispatch(push("/accueil"));
          })
          .catch((err) => console.error(err));

        next(action);
      }
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
