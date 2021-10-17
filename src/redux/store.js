import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todoReducer from "./todo";

const reducers = combineReducers({
  todo: todoReducer
});

const MyMiddleware = (store) => (next) => (action) => {
  if (action.type === "ADD_TODO") {
    if (action.payload.trim() !== "") {
      return next(action);
    }
  } else return next(action);
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(MyMiddleware)
  // other store enhancers if any
);

export default createStore(reducers, enhancer);
