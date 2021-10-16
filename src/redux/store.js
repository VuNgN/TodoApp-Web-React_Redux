import { createStore, combineReducers } from "redux";
import todoReducer from "./todo";

const reducers = combineReducers({
  todo: todoReducer
});
export default createStore(reducers);
