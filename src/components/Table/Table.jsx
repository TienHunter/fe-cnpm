import classNames from "classnames/bind";
import style from "./Table.module.scss";
import { Table } from "react-bootstrap";

const cx = classNames.bind(style);

function BaseTable({ data, fieldNames, colNames }) {
   return (
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
                        <td>action</td>
                     </tr>
                  ))}
            </tbody>
         </Table>
      </div>
   );
}
export default BaseTable;
