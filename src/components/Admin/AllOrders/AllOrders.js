import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import AllOrder from "../AllOrder/AllOrder";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://limitless-reaches-30016.herokuapp.com/purchases")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  // console.log(allOrders)
  const handleDeleteOrder = (_id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://limitless-reaches-30016.herokuapp.com/purchases/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = allOrders.filter(
              (order) => order._id !== _id
            );
            setAllOrders(remainingOrders);
            setSuccess(true);
            return;
          }
        });
    }
  };
  return (
    <section className="product-orders">
      <h2 className="">All Order for admin</h2>
      {success && (
        <Alert severity="success">
          Your Order has been successfully deleted
        </Alert>
      )}
      <Row xs={1} sm={2} md={2} lg={4} xl={4} className="g-4">
        {allOrders.map((allOrder) => (
          <AllOrder
            key={allOrder._id}
            allOrder={allOrder}
            handleDeleteOrder={handleDeleteOrder}
          ></AllOrder>
        ))}
      </Row>
    </section>
  );
};

export default AllOrders;
