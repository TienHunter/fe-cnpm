import { combineReducers, createStore } from "redux";
import userReducer from "./users/reducer";
import householdReducer from "./household/reducer";
const rootReducer = combineReducers({
   user: userReducer,
   household: householdReducer,
});

const store = createStore(rootReducer);
export default store;
