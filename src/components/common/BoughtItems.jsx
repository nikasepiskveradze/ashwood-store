import React from "react";

const BoughtItems = ({ orders }) => {
  return (
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
        {orders.map(order => (
          <tr key={Math.random()}>
            <td>
              <img
                src={`http://localhost:5000/${order.image}`}
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
  );
};

export default BoughtItems;
