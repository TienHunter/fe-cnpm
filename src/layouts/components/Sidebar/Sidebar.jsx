import classNames from 'classnames/bind';
import styles from "./Sidebar.module.scss"
let cx = classNames.bind(styles);
function Sidebar({children}){

   return (
      <div className={cx("wrapper")}>
         Sidebar comp
      </div>
   )
}
export default Sidebar;