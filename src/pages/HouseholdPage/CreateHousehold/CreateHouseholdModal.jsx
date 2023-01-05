import classNames from "classnames/bind";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import style from "./CreateHouseholdModal.module.scss";
import { createHousehold } from "redux/household/action";
import * as householdService from "services/householdService";
const cx = classNames.bind(style);
function CreateHouseholdModal({ show, handleClose }) {
   const dispatch = useDispatch();
   console.log("render create");
   const [newHousehold, setNewHousehold] = useState({
      householdCode: "",
      owner: "",
      addressHouse: "",
      precinct: "",
      district: "",
      city: "",
   });
   const onClose = () => {
      setNewHousehold({
         householdCode: "",
         owner: "",
         addressHouse: "",
         precinct: "",
         district: "",
         city: "",
      });
      handleClose();
   };
   const onSubmit = async () => {
      let res = await householdService.createNewHousehold(newHousehold);
      if (res?.code === 200) {
         dispatch(createHousehold(res.data));
         onClose();
      } else {
         console.log(res);
      }
   };
   return (
      <Modal show={show} onHide={onClose} backdrop="static" size="lg" centered>
         <Modal.Header closeButton onHide={onClose}>
            <Modal.Title>Thêm hộ khẩu mới</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Row>
                  <Col lg={6} sm={12}>
                     <Form.Group
                        className="mb-3"
                        controlId="formCreateHouseholdCode"
                     >
                        <Form.Label>Mã hộ khẩu</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Mã khẩu khẩu"
                           value={newHousehold.householdCode}
                           onChange={(e) =>
                              setNewHousehold({
                                 ...newHousehold,
                                 householdCode: e.target.value,
                              })
                           }
                        />
                     </Form.Group>
                  </Col>
                  <Col lg={6} sm={12}>
                     <Form.Group
                        className="mb-3"
                        controlId="formCreateHouseholdOwner"
                     >
                        <Form.Label>Chủ hộ</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Chủ hộ"
                           value={newHousehold.owner}
                           onChange={(e) =>
                              setNewHousehold({
                                 ...newHousehold,
                                 owner: e.target.value,
                              })
                           }
                        />
                     </Form.Group>
                  </Col>
                  <Col lg={6} sm={12}>
                     <Form.Group
                        className="mb-3"
                        controlId="formCreateHouseholdAddressHouse"
                     >
                        <Form.Label>Số nhà/ Xóm</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Số nhà/ Xóm"
                           value={newHousehold.addressHouse}
                           onChange={(e) =>
                              setNewHousehold({
                                 ...newHousehold,
                                 addressHouse: e.target.value,
                              })
                           }
                        />
                     </Form.Group>
                  </Col>
                  <Col lg={6} sm={12}>
                     <Form.Group
                        className="mb-3"
                        controlId="formCreateHouseholdPrecinct"
                     >
                        <Form.Label>Xã / Phường</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Xã/ Phường"
                           value={newHousehold.precinct}
                           onChange={(e) =>
                              setNewHousehold({
                                 ...newHousehold,
                                 precinct: e.target.value,
                              })
                           }
                        />
                     </Form.Group>
                  </Col>
                  <Col lg={6} sm={12}>
                     <Form.Group
                        className="mb-3"
                        controlId="formCreateHouseholdDistrict"
                     >
                        <Form.Label>Quận/ Huyện</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Quận / Huyện"
                           value={newHousehold.district}
                           onChange={(e) =>
                              setNewHousehold({
                                 ...newHousehold,
                                 district: e.target.value,
                              })
                           }
                        />
                     </Form.Group>
                  </Col>
                  <Col lg={6} sm={12}>
                     <Form.Group
                        className="mb-3"
                        controlId="formCreateHouseholdCity"
                     >
                        <Form.Label>Tỉnh/ TP</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Tỉnh/ TP"
                           value={newHousehold.city}
                           onChange={(e) =>
                              setNewHousehold({
                                 ...newHousehold,
                                 city: e.target.value,
                              })
                           }
                        />
                     </Form.Group>
                  </Col>
                  <Col lg={6} sm={12}></Col>
               </Row>
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
               Đóng
            </Button>
            <Button variant="primary" onClick={onSubmit}>
               Thêm mới
            </Button>
         </Modal.Footer>
      </Modal>
   );
}
export default React.memo(CreateHouseholdModal);
