import { SET_INPUT } from "./userActions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  role: "user",
  phone: "",
  isLogged: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default userReducer;
