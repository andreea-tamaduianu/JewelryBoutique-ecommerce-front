import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";

const Orders = ({ orders, handleStatusChange }) => {
  
  const showOrderInTable = (order) => {
    console.log('ORDER IN ORDERS', order)
    console.log('status', order.orderStatus)
    return (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Denumire produs</th>
          <th scope="col">Pret (TVA inclus) in RON</th>
         
          <th scope="col">Dimensiune produs</th>
          <th scope="col">Cantitate</th>
          <th scope="col">Finalizata</th>
          
        </tr>
      </thead>

      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>{p.product.price}</td>
          
            <td>{p.size}</td>
            <td>{p.count}</td>

            <td>
              {order.orderStatus === "Completed" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <ExclamationCircleOutlined style={{ color: "orange" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )};

  return (
    <>
      {orders.map((order) => (
        <div key={order._id} className="row pb-5">
          <div className="btn btn-block bg-light">
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className="row">
              <div className="col-md-4">Status comanda</div>
              <div className="col-md-8">
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="form-control"
                  defaultValue={order.orderStatus}
                  name="status"
                >
                  <option value="Plasata">Plasata</option>
                  <option value="Plata ramburs">Plata ramburs</option>
                  <option value="In curs de procesare">In curs de procesare</option>
                  <option value="Expediata">Expediata</option>
                  <option value="Anulata">Anulata</option>
                  <option value="Finalizata">Finalizata</option>
                </select>
              </div>
            </div>
          </div>

          {showOrderInTable(order)}
        </div>
      ))}
    </>
  );
};

export default Orders;
