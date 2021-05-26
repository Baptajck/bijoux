/* eslint-disable no-lone-blocks */
import { push } from "connected-react-router";
import { fetchProductToBdd } from "../api/backend.instance";
import { saveProduct, FETCH_PRODUCTS } from "./productActions";

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_PRODUCTS:
      {
        fetchProductToBdd()
          .then(({ data: { products } }) => {
            store.dispatch(saveProduct(products));
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
