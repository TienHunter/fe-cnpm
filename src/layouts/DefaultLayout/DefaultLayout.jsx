import classNames from 'classnames/bind';
import Header from 'layouts/components/Header/Header';
import Navbar from 'layouts/components/Navbar/Navbar';
import styles from "./DefaultLayout.module.scss"
let cx = classNames.bind(styles);
function DefaultLayout({children}){

   return (
      <div className={cx("wrapper")}>
         <Header />
         <div className={cx("body")}>
            <Navbar />
            {children}
         </div>
        
      </div>
   )
}
export default DefaultLayout;