import React from "react";
import { url } from "../../config.json";

const BoughtItems = ({ orders }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center mt-2">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.reverse().map(order => (
            <tr key={Math.random()}>
              <td>
                <img
                  src={`${url}/${order.image}`}
                  alt=""
                  style={{ width: 200 }}
                />
              </td>

              <td style={{ paddingTop: 70 }}>
                <h2 className="h5">{order.title}</h2>
              </td>

              <td style={{ paddingTop: 70 }}>
                <h2 className="h5">{order.short}</h2>
              </td>

              <td style={{ paddingTop: 70 }}>
                <h2 className="h5">{order.quantity}</h2>
              </td>

              <td style={{ paddingTop: 70 }}>
                <h2 className="h5">{order.category.name}</h2>
              </td>

              <td style={{ paddingTop: 70 }}>
                <h2 className="h5">{order.price}</h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoughtItems;
