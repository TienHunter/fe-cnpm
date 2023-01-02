const actionType = {
   GET_ALL_HOUSEHOLD: "GET_ALL_HOUSEHOLD",
   CREATE_HOUSEHOLD: "CREATE_HOUSEHOLD",
   GET_HOUSEHOLD_PAGING_FILTER: "GET_HOUSEHOLD_PAGING_FILTER",
   REFRESH: "REFRESH",
   PAGING_FILTER: "PAGING_FILTER",
};
const getAllHousehold = (payload) => {
   return {
      type: actionType.GET_ALL_HOUSEHOLD,
      payload,
   };
};
const createHousehold = (payload) => {
   return {
      type: actionType.CREATE_HOUSEHOLD,
      payload,
   };
};
const getHouseholdByPagingAndFilter = (payload) => {
   return {
      type: actionType.GET_HOUSEHOLD_PAGING_FILTER,
      payload,
   };
};
const setPagingAndFilter = (payload) => {
   return {
      type: actionType.PAGING_FILTER,
      payload,
   };
};

const refresh = () => {
   return {};
};
export default actionType;
export {
   getAllHousehold,
   createHousehold,
   getHouseholdByPagingAndFilter,
   setPagingAndFilter,
};
