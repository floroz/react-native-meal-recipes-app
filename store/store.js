import { createStore, combineReducers } from "redux";
import mealsReducer from "./reducers/meals";

const store = createStore(
  combineReducers({
    meals: mealsReducer,
  })
);

export default store;
