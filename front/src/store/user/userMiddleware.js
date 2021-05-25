import { push } from "connected-react-router";
import { createUserToBdd } from "../api/backend.instance";
import { CREATE_USER, saveUser } from "./userActions";

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
          password,
          email,
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

    default:
      next(action);
  }
};

export default userMiddleware;
