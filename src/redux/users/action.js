const actionType = {
   LOGIN: "LOGIN",
   LOGOUT: "LOGOUT",
};
const login = (payload) => {
   return {
      type: actionType.LOGIN,
      payload,
   };
};

const logout = () => {
   return {
      type: actionType.LOGOUT,
   };
};
export default actionType;
export { login, logout };
