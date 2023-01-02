import axios from "axios";
import { localStore } from "./constants";
const request = axios.create({
   baseURL: process.env.REACT_APP_BACKEND_URL,
   headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${JSON.parse(
         localStorage.getItem(localStore.TOKEN)
      )}`,
   },
});

export default request;
