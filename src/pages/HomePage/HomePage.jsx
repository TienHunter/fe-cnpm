import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import styles from "./HomePage.module.scss";
import { useEffect } from "react";
import {
   getHouseholdByPagingAndFilter,
   setPagingAndFilter,
} from "redux/household/action";
import * as householdService from "services/householdService";
import { fieldHousehold, colHousehold } from "utils/constants";
import BaseTable from "components/Table/Table";
import BasePaging from "components/Paging/BasePaging";
let cx = classNames.bind(styles);
function HomePage() {
   const { households, pageSize, totalRecords, pageNumber, keyword } =
      useSelector((state) => state.household);
   const dispatch = useDispatch();
   useEffect(() => {
      const apiAllHouseholds = async () => {
         console.log(pageNumber);
         const res = await householdService.getHouseholdByPagingAndFilter(
            pageSize,
            pageNumber,
            keyword
         );
         if (res?.code === 200) {
            dispatch(
               getHouseholdByPagingAndFilter({
                  households: [...res.data.households],
                  totalRecords: res.data.totalRecords,
               })
            );
         } else {
            dispatch(
               getHouseholdByPagingAndFilter({
                  households: [],
                  totalRecords: 0,
               })
            );
            // hanlde error
         }
      };
      apiAllHouseholds();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pageSize, pageNumber, keyword]);
   // useEffect(() => {}, [households]);

   const onChangePage = (newPageNumber) => {
      dispatch(
         setPagingAndFilter({
            pageSize,
            keyword,
            pageNumber: newPageNumber,
         })
      );
   };
   const onChangePageSize = (newPageSize) => {
      dispatch(
         setPagingAndFilter({
            pageSize: newPageSize,
            keyword,
            pageNumber,
         })
      );
   };
   return (
      <>
         <div className={cx("wrapper")}>
            <Container>
               <h3 className={cx("title")}>Danh sach ho khau khu dan cu VDT</h3>
               <div className={cx("content")}>
                  <div className={cx("toolbars")}></div>
                  <BaseTable
                     data={households}
                     fieldNames={fieldHousehold}
                     colNames={colHousehold}
                  />
                  <BasePaging
                     pageSize={Number(pageSize)}
                     totalRecords={Number(totalRecords)}
                     pageNumber={Number(pageNumber)}
                     onChangePage={onChangePage}
                     onChangePageSize={onChangePageSize}
                  />
               </div>
            </Container>
         </div>
      </>
   );
}
export default HomePage;
