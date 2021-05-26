import { SET_INPUT, SAVE_USER, SAVE_USER_LOGIN } from "./userActions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  phone: "",
  role: "user",
  token: "",
  user: [],
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
    case SAVE_USER_LOGIN:
      return {
        ...state,
        token: action.token,
        user: action.user,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default userReducer;
