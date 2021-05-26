import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import userReducer from "./user/userReducer";
import productReducer from "./product/productReducer";

import userMiddleware from "./user/userMiddleware";
import productMiddleware from "./product/productMiddleware";

const createRootReducer = (history) =>
  // Insert Reducers here
  combineReducers({
    router: connectRouter(history),
    userReducer,
    productReducer,
  });

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      // Insert Middlewares here
      applyMiddleware(
        routerMiddleware(history),
        userMiddleware,
        productMiddleware
      )
    )
  );
  return store;
}
