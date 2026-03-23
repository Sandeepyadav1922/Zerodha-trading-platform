import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:3002/allOrders", {withCredentials: true})
  .then((res) => {
    setAllOrders(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
})

  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>mode</th>
            </tr>
            {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;