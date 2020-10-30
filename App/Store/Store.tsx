declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

import { createStore, applyMiddleware, compose } from "redux";
import { finalReducer } from "./Reducer";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(finalReducer(), composeEnhancers(applyMiddleware()));
export const persistor = persistStore(store);
export default store;
