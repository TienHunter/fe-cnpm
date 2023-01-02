import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";
import {
   getHouseholdByPagingAndFilter,
   setPagingAndFilter,
} from "redux/household/action";
import * as householdService from "services/householdService";
import { fieldHousehold, colHousehold } from "utils/constants";
import BaseTable from "components/Table/Table";
import BasePaging from "components/Paging/BasePaging";
import { useDebounce } from "hook";
let cx = classNames.bind(styles);
function HomePage() {
   const { households, pageSize, totalRecords, pageNumber, keyword } =
      useSelector((state) => state.household);
   const [searchValue, setSearchValue] = useState("");
   const debounceValue = useDebounce(searchValue, 500);
   const dispatch = useDispatch();
   useEffect(() => {
      const apiAllHouseholds = async () => {
         console.log(pageNumber);
         const res = await householdService.getHouseholdByPagingAndFilter(
            pageSize,
            pageNumber,
            debounceValue
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
            pageNumber: 1,
         })
      );
   };
   useEffect(() => {
      dispatch(
         setPagingAndFilter({
            pageSize,
            keyword: debounceValue,
            pageNumber: 1,
         })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debounceValue]);
   return (
      <>
         <div className={cx("wrapper")}>
            <Container>
               <h3 className={cx("title")}>Danh sach ho khau khu dan cu VDT</h3>
               <div className={cx("content")}>
                  <div className={cx("toolbars")}>
                     <div className={cx("search")}>
                        <input
                           type="text"
                           className={cx("search-input")}
                           value={searchValue}
                           onChange={(e) =>
                              setSearchValue(
                                 e.target.value[0] === " " ? "" : e.target.value
                              )
                           }
                        />
                     </div>
                  </div>
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
