import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { Row } from "react-bootstrap";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://limitless-reaches-30016.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  const handleDeleteOrder = (_id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://limitless-reaches-30016.herokuapp.com/products/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = products.filter(
              (order) => order._id !== _id
            );
            setProducts(remainingOrders);
            setSuccess(true);
          }
        });
    }
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <Row xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className="">
        {products.map((product) => (
          <ManageProduct
            key={product._id}
            product={product}
            success={success}
            handleDeleteOrder={handleDeleteOrder}
          ></ManageProduct>
        ))}
        {success && (
          <Alert severity="error">
            A Product has been Successfully Deleted
          </Alert>
        )}
      </Row>
    </div>
  );
};

export default ManageProducts;
