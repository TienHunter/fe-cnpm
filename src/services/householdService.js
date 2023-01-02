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
export { getAllHousehold, getHouseholdByPagingAndFilter };
