import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import userReducer from "./user/userReducer";

import userMiddleware from "./user/userMiddleware";

const createRootReducer = (history) =>
  // Insert Reducers here
  combineReducers({
    router: connectRouter(history),
    userReducer,
  });

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      // Insert Middlewares here
      applyMiddleware(routerMiddleware(history), userMiddleware)
    )
  );
  return store;
}
