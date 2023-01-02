import {NavLink} from "react-router-dom"
import classNames from 'classnames/bind';
import styles from "./Navbar.module.scss";
import {path} from "utils/constants"
let cx = classNames.bind(styles);
function Navbar({children}){

   return (
      <div className={cx("wrapper")}>
         <ul className={cx("nav")}>
            <NavLink
            to={path.HOME}
            className={({isActive})=>isActive ? cx('active'):""}
            >

            <li className={cx("nav-item")}>HOME</li>
            </NavLink>
            <NavLink
            to={path.HOUSEHOLD}
            className={({isActive})=>isActive ? cx('active'):""}
            >

            <li className={cx("nav-item")}>HOUSEHOLD</li>
            </NavLink>
            <NavLink
            to={path.RESIDENT}
            className={({isActive})=>isActive ? cx('active'):""}
            >

            <li className={cx("nav-item")}>RESIDENT</li>
            </NavLink>

         </ul>
      </div>
    );
}
export default Navbar;