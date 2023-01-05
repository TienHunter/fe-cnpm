import classNames from "classnames/bind";
import style from "./TableHousehold.module.scss";
import { Button, Modal, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
const cx = classNames.bind(style);

function TableHousehold({ data, fieldNames, colNames, removeRow }) {
   const [showPopup, setShowPopup] = useState(false);
   const [item, setItem] = useState({});
   const [idx, setIdx] = useState(-1);
   useEffect(() => {}, []);
   const onRemoveItem = (item, index) => {
      setShowPopup(true);
      setItem({ ...item });
      setIdx(index);
   };
   const onClose = () => {
      setItem({});
      setShowPopup(false);
   };
   const onSubmit = () => {
      if (idx === -1 || JSON.stringify(item) === "{}") {
      } else {
         removeRow(item.id, idx);
      }
      setShowPopup(false);
   };
   console.log("re-render table");
   return (
      <>
         <div className={cx("table-container")}>
            <Table striped bordered hover>
               <thead className={cx("table-header")}>
                  <tr>
                     {colNames.map((item, index) => (
                        <th key={index}>{item}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {data &&
                     data.length > 0 &&
                     data.map((item, index) => (
                        <tr key={item.id}>
                           <td>{index}</td>
                           {fieldNames.map((field, indexF) => (
                              <td key={indexF}>{item[field]}</td>
                           ))}
                           <td>
                              <Button
                                 variant="danger"
                                 className={cx("me-2")}
                                 onClick={() => onRemoveItem(item, index)}
                              >
                                 Xoa
                              </Button>
                              <Button variant="info">Sua</Button>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </Table>
         </div>
         <Modal show={showPopup} onHide={onClose} size="md" centered>
            <Modal.Header closeButton onHide={onClose}>
               <Modal.Title>Xoa ho khau</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>Ma ho hau :{item.householdCode}</p>
               <p>Ten chu ho : {item.owner}</p>
               ....
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={onClose}>
                  Huy
               </Button>
               <Button variant="danger" onClick={onSubmit}>
                  Xoa
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
export default React.memo(TableHousehold);
