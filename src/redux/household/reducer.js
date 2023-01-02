import actionType from "./action";
const initialState = {
   households: [],
   household: {},
   pageSize: 20,
   pageNumber: 1,
   keyword: "",
   totalRecords: 0,
};

const householdReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionType.GET_ALL_HOUSEHOLD:
         return {
            ...state,
            households: [...action.payload],
         };
      case actionType.CREATE_HOUSEHOLD:
         return {
            household: action.payload,
            households: [action.payload, ...state.households],
         };
      case actionType.GET_HOUSEHOLD_PAGING_FILTER:
         return {
            ...state,
            households: [...action.payload.households],
            totalRecords: action.payload.totalRecords,
         };
      case actionType.PAGING_FILTER:
         return {
            ...state,
            pageNumber: action.payload.pageNumber,
            keyword: action.payload.keyword,
            pageSize: action.payload.pageSize,
         };
      default:
         return state;
   }
};

export default householdReducer;
