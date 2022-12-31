import request from "../utils/httpRequest";

const getAllHouseholds = async () => {
   try {
      return await request.get("/households");
   } catch (error) {
      console.log(error.message);
   }
};
export { getAllHouseholds };
