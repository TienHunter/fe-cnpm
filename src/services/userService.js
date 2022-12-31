import request from "../utils/httpRequest";

const login = async (username, password) => {
   try {
      let res = await request.post("/api/auth/login", {
         username,
         password,
      });
      return res.data;
   } catch (error) {
      console.log(error.message);
   }
};
export { login };
