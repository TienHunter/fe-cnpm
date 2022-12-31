import actionType from "./action";
import { localStore } from "utils/constants";
const initialState = {
   username: localStorage.getItem(localStore.USERNAME),
   token: localStorage.getItem(localStore.TOKEN),
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionType.LOGIN:
         console.log(action.payload);
         return {
            username: action.payload.username,
            token: action.payload.token,
         };
      case actionType.LOGOUT:
         return {
            username: null,
            token: null,
         };

      default:
         return state;
   }
};

export default userReducer;
