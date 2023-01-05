import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { Button, Container } from "react-bootstrap";
import styles from "./Household.module.scss";
import { useCallback, useEffect, useState } from "react";
import {
   getHouseholdByPagingAndFilter,
   removeHousehold,
   setPagingAndFilter,
} from "redux/household/action";
import * as householdService from "services/householdService";
import { fieldHousehold, colHousehold } from "utils/constants";
import BasePaging from "components/Paging/BasePaging";
import { useDebounce } from "hook";
import CreateHouseholdModal from "./CreateHousehold/CreateHouseholdModal";
import TableHousehold from "./TableHousehold/TableHousehold";
let cx = classNames.bind(styles);
function HouseholdPage() {
   const { households, pageSize, totalRecords, pageNumber, keyword } =
      useSelector((state) => state.household);
   const [searchValue, setSearchValue] = useState("");
   const debounceValue = useDebounce(searchValue, 500);
   const dispatch = useDispatch();
   const [showCreateModal, setShowCreateModal] = useState(false);
   useEffect(() => {
      const apiAllHouseholds = async () => {
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

   const onChangePage = useCallback(
      (newPageNumber) => {
         dispatch(
            setPagingAndFilter({
               pageSize,
               keyword,
               pageNumber: newPageNumber,
            })
         );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [pageNumber]
   );

   const onChangePageSize = useCallback(
      (newPageSize) => {
         dispatch(
            setPagingAndFilter({
               pageSize: newPageSize,
               keyword,
               pageNumber: 1,
            })
         );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [pageSize]
   );

   const onCloseCreateModal = useCallback(
      () => setShowCreateModal(false),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [showCreateModal]
   );
   const removeRow = useCallback(
      async (id, idx) => {
         let res = await householdService.deleteHouseholdById(id);
         if (res?.code === 200) {
            dispatch(removeHousehold(idx));
         } else {
            console.log(res);
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [dispatch]
   );
   console.log("re-render home:", pageSize, pageNumber);
   return (
      <>
         <div className={cx("wrapper")}>
            <Container>
               <h3 className={cx("title")}>Danh sach ho khau khu dan cu VDT</h3>
               <div className={cx("content")}>
                  <div className={cx("toolbars")}>
                     <div className={cx("search")}>
                        <Button
                           variant="primary"
                           onClick={() => setShowCreateModal(true)}
                        >
                           Thêm mới hộ khẩu
                        </Button>
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
                  <TableHousehold
                     data={households}
                     fieldNames={fieldHousehold}
                     colNames={colHousehold}
                     removeRow={removeRow}
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
         <CreateHouseholdModal
            show={showCreateModal}
            handleClose={onCloseCreateModal}
         />
      </>
   );
}
export default HouseholdPage;
