import { SET_INPUT, SAVE_USER } from "./userActions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  phone: "",
  role: "user",
  isLogged: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default userReducer;
