import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://camera-essentials-website-server-side-cir7qf38f-munnaahmed130.vercel.app/purchases/user?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleDeleteOrder = (_id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://camera-essentials-website-server-side-cir7qf38f-munnaahmed130.vercel.app/purchases/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== _id);
            setOrders(remainingOrders);
            setSuccess(true);
            return;
          }
        });
    }
  };

  return (
    <section className="product-order">
      <h2>This is my orders</h2>
      {success && (
        <Alert severity="success">
          Your Order has been successfully deleted
        </Alert>
      )}
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={3}
        xl={3}
        xxl={4}
        className="gy-4 my-orders"
      >
        {orders.map((order) => (
          <MyOrder
            key={order._id}
            setSuccess={setSuccess}
            setOrders={setOrders}
            handleDeleteOrder={handleDeleteOrder}
            order={order}
          ></MyOrder>
        ))}
      </Row>
    </section>
  );
};

export default MyOrders;
