import Pagination from "react-bootstrap/Pagination";
import classNames from "classnames/bind";
import style from "./Paging.module.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
const cx = classNames.bind(style);
function BasePaging({
   pageSize,
   pageNumber,
   totalRecords,
   onChangePage,
   onChangePageSize,
}) {
   const totalPages =
      totalRecords % pageSize
         ? Math.floor(totalRecords / pageSize) + 1
         : Math.floor(totalRecords / pageSize);
   const handleChangePage = (newPageNumber) => {
      onChangePage(newPageNumber);
   };
   const handleChangePageSize = (newPageSize) => {
      onChangePageSize(newPageSize);
   };
   return (
      <div className={cx("wrapper")}>
         <div className={cx("paging-top")}>
            <Pagination>
               <DropdownButton
                  id="dropdown-basic-button"
                  title={`${pageSize} bản ghi trên 1 trang`}
                  className={cx("me-auto")}
               >
                  <Dropdown.Item
                     as="button"
                     onClick={() => handleChangePageSize(10)}
                     active={pageSize === 10}
                  >
                     10
                  </Dropdown.Item>
                  <Dropdown.Item
                     as="button"
                     onClick={() => handleChangePageSize(20)}
                     active={pageSize === 20}
                  >
                     20
                  </Dropdown.Item>
                  <Dropdown.Item
                     as="button"
                     onClick={() => handleChangePageSize(50)}
                     active={pageSize === 50}
                  >
                     50
                  </Dropdown.Item>
                  <Dropdown.Item
                     as="button"
                     onClick={() => handleChangePageSize(100)}
                     active={pageSize === 100}
                  >
                     100
                  </Dropdown.Item>
               </DropdownButton>

               <Pagination.First
                  disabled={pageNumber === 1}
                  onClick={() => handleChangePage(1)}
               />
               <Pagination.Prev
                  disabled={pageNumber === 1}
                  onClick={() => handleChangePage(pageNumber - 1)}
               />
               {totalPages <= 6 ? (
                  <>
                     {Array.from(Array(totalPages), (e, i) => (
                        <Pagination.Item
                           key={i}
                           active={pageNumber === i + 1}
                           onClick={() => handleChangePage(i + 1)}
                        >
                           {i + 1}
                        </Pagination.Item>
                     ))}
                  </>
               ) : (
                  <>
                     {pageNumber === 1 ||
                     pageNumber === 2 ||
                     pageNumber === 3 ? (
                        <>
                           <Pagination.Item
                              active={pageNumber === 1}
                              onClick={() => handleChangePage(1)}
                           >
                              {1}
                           </Pagination.Item>
                           <Pagination.Item
                              active={pageNumber === 2}
                              onClick={() => handleChangePage(2)}
                           >
                              {2}
                           </Pagination.Item>
                           <Pagination.Item
                              active={pageNumber === 3}
                              onClick={() => handleChangePage(3)}
                           >
                              {3}
                           </Pagination.Item>
                           <Pagination.Item onClick={() => handleChangePage(4)}>
                              {4}
                           </Pagination.Item>
                           <Pagination.Ellipsis />
                           <Pagination.Item
                              onClick={() => handleChangePage(totalPages)}
                           >
                              {totalPages}
                           </Pagination.Item>
                        </>
                     ) : (
                        <>
                           {pageNumber === totalPages ||
                           pageNumber === totalPages - 1 ||
                           pageNumber === totalPages - 2 ? (
                              <>
                                 <Pagination.Item
                                    onClick={() => handleChangePage(1)}
                                 >
                                    {1}
                                 </Pagination.Item>
                                 <Pagination.Ellipsis />
                                 <Pagination.Item
                                    onClick={() =>
                                       handleChangePage(totalPages - 3)
                                    }
                                 >
                                    {totalPages - 3}
                                 </Pagination.Item>
                                 <Pagination.Item
                                    active={pageNumber === totalPages - 2}
                                    onClick={() =>
                                       handleChangePage(totalPages - 2)
                                    }
                                 >
                                    {totalPages - 2}
                                 </Pagination.Item>
                                 <Pagination.Item
                                    active={pageNumber === totalPages - 1}
                                    onClick={() =>
                                       handleChangePage(totalPages - 1)
                                    }
                                 >
                                    {totalPages - 1}
                                 </Pagination.Item>
                                 <Pagination.Item
                                    active={pageNumber === totalPages}
                                    onClick={() => handleChangePage(totalPages)}
                                 >
                                    {totalPages}
                                 </Pagination.Item>
                              </>
                           ) : (
                              <>
                                 <Pagination.Item
                                    onClick={() => handleChangePage(1)}
                                 >
                                    {1}
                                 </Pagination.Item>
                                 <Pagination.Ellipsis />
                                 <Pagination.Item
                                    onClick={() =>
                                       handleChangePage(pageNumber - 1)
                                    }
                                 >
                                    {pageNumber - 1}
                                 </Pagination.Item>
                                 <Pagination.Item
                                    active
                                    onClick={() => handleChangePage(pageNumber)}
                                 >
                                    {pageNumber}
                                 </Pagination.Item>
                                 <Pagination.Item
                                    onClick={() =>
                                       handleChangePage(pageNumber + 1)
                                    }
                                 >
                                    {pageNumber + 1}
                                 </Pagination.Item>
                                 <Pagination.Ellipsis />
                                 <Pagination.Item
                                    onClick={() => handleChangePage(totalPages)}
                                 >
                                    {totalPages}
                                 </Pagination.Item>
                              </>
                           )}
                        </>
                     )}
                  </>
               )}
               <Pagination.Next
                  disabled={pageNumber === totalPages}
                  onClick={() => handleChangePage(pageNumber + 1)}
               />
               <Pagination.Last
                  disabled={pageNumber === totalPages}
                  onClick={() => handleChangePage(totalPages)}
               />
            </Pagination>
         </div>
         <div className={cx("paging-bottom")}>
            Tổng:&nbsp;
            <b>{totalRecords}</b>
            &nbsp;bản ghi
         </div>
      </div>
   );
}

export default BasePaging;
