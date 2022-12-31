const initialState = {
   households: [],
   household: {},
};

const householdReducer = (state = initialState, action) => {
   switch (action.type) {
      case "GET_ALL_HOUSEHOLD":
         return state;
      case "CREATE_HOUSEHOLD":
         return state;

      default:
         return state;
   }
};

export default householdReducer;
