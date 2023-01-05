import request from "../utils/httpRequest";

const getAllHousehold = async () => {
   try {
      let res = await request.get("/api/households");
      return res.data;
   } catch (error) {
      console.log(error);
      return error.response.data;
   }
};
const getHouseholdByPagingAndFilter = async (
   pageSize = 20,
   pageNumber = 1,
   keyword = ""
) => {
   try {
      let res = await request.get(
         `/api/households/filter?pageSize=${pageSize}&pageNumber=${pageNumber}&keyword=${keyword}`
      );
      return res.data;
   } catch (error) {
      console.log(error);
      return error.response.data;
   }
};
const createNewHousehold = async (newHousehold) => {
   try {
      let res = await request.post("/api/households/create", newHousehold);
      return res.data;
   } catch (error) {
      console.log(error);
      return error.response.data;
   }
};
const deleteHouseholdById = async (householdId) => {
   try {
      let res = await request.delete(`/api/households/${householdId}`);
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
export {
   getAllHousehold,
   getHouseholdByPagingAndFilter,
   createNewHousehold,
   deleteHouseholdById,
};
