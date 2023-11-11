import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../css/customer.css";
export const Customer = ({ rows, deleteRow,editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <td>name</td>
          <td className="expand">status</td>
        </thead>

        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {" "}
                    {row.status}
                  </span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill onClick={()=>editRow(idx)} />
                  </span>
                </td>
              </tr>
            );
          })}

           <tr>
            <td>John smith</td>
            <td>
              <span className="label label-live"> Owner</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          {/* <tr>
            <td>Member1</td>
            <td>
              <span className="label label-draft">Member</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>

          <tr>
            <td>Member2</td>
            <td>
              <span className="label label-draft">Member</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>  */}
        </tbody>
      </table>
    </div>
  );
};
export default Customer;
