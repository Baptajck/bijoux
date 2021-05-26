import { SAVE_PRODUCT } from "./productActions";

const initialState = {
  products: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCT:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default userReducer;
