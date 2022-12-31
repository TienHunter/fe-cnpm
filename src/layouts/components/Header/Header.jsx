import classNames from 'classnames/bind';
import styles from "./Header.module.scss";
import logo from "assets/images/brand.png";
import avatar from "assets/images/avatar.png"
import {path} from "utils/constants"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localStore } from 'utils/constants';
import { logout } from 'redux/users/action';
let cx = classNames.bind(styles);
function Header(){
   const naviage = useNavigate();
   const username = useSelector(state=>state.user.username)
   const [showOption,setShowOption] = useState(false) 
   const dispatch = useDispatch();
   const handleLogout = ()=>{
      localStorage.removeItem(localStore.USERNAME);
      localStorage.removeItem(localStore.TOKEN);
      dispatch(logout())
   }
   return (
      <div className={cx("wrapper")}>
         <div className={cx("brand")} onClick={()=>naviage(path.HOME)}>
            <img src={logo} alt="Brand" className='' />
         </div>
         <div className={cx("content")}>
            <p>Quản lý dân cư</p>
         </div>
         <div className={cx("profile")}>
            <img src={avatar} alt="Profile" className='' title={username} onClick={()=>setShowOption(!showOption)} />
            {
               showOption &&
               <ul className={cx("options")}>
                  <li className={cx('option')} onClick={handleLogout}>Đăng xuất</li>
               </ul>

            }
         </div>
      </div>
   )
}
export default Header;