/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "redux/users/action.js"
import * as userService from "services/userService.js"
import "./Login.scss";
function Login(props) {
   const navigate = useNavigate();
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");
   const [errorMessage, setErrorMessage] =useState("");
   const token = useSelector((state)=>state.user.token)
   const dispatch = useDispatch();

   useEffect(()=>{
      if(token) navigate("/");
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[token])
   const hanldeLogin = async(e)=>{
      e.preventDefault();
      setErrorMessage("");
         let res = await userService.login(username,password);
         if(res?.code === 200){
            dispatch(login({
               username:res.data.user.usename,
               token:res.data.token
            }))
            localStorage.setItem("access_token",JSON.stringify(res.data.token));
            localStorage.setItem("username",JSON.stringify(res.data.user.usename));
         }
         else if(res) {
            setErrorMessage(res.message)
         }
   }

   return (
    <div className="Auth-form-container">
         <form className="Auth-form">
            <div className="Auth-form-content">
               <h3 className="Auth-form-title">Đăng nhập</h3>
               <div className="form-group mt-3">
                  <label>Tài khoản</label>
                  <input
                     type="username"
                     className="form-control mt-1"
                     placeholder="Enter username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div className="form-group mt-3">
                  <label>Mật khẩu</label>
                  <input
                     type="password"
                     className="form-control mt-1"
                     placeholder="Enter password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               {errorMessage && <p className="mt-3 error-login-mes">{errorMessage}</p>}
               <div className="d-grid gap-2 mt-3">
                  <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={hanldeLogin}
                  >
                     Đăng nhập
                  </button>
               </div>
               <p className="forgot-password text-right mt-2">
                  Quên <a href="#">mật khẩu ?</a>
               </p>
            </div>
         </form>
      </div>

      
   );
}
export default Login;
