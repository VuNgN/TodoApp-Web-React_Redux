import { createStore, combineReducers } from "redux";
import todoReducer from "./todo";

const reducers = combineReducers({
  todo: todoReducer
});
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
