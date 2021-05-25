import { push } from "connected-react-router";
import { createUserToBdd } from "../api/backend.instance";
import { CREATE_USER, createUser } from "./userActions";

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_USER:
      {
        const { firstName, lastName, email, password, address, city, phone } =
          action;
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
            console.log(res);
            // store.dispatch(createUser(id, userId));
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
