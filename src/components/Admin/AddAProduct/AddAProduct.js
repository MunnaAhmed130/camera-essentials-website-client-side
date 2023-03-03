import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data.value);
    axios
      .post("https://camera-store-server.vercel.app/products", data)
      .then((res) => {
        // console.log(res)
        if (res.data.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };

  return (
    <div className="add-product">
      <h2>Add a Product</h2>
      {success && (
        <Alert severity="success">
          A New Product has been Successfully added
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="add-product__form">
        <input {...register("name")} type="text" placeholder="Product Name" />
        <br />
        <input {...register("img")} type="text" placeholder="Img Url" /> <br />
        <textarea
          type="text"
          rows={5}
          // cols={30}
          {...register("description")}
          placeholder="Short description"
        />
        <br />
        <input type="number" {...register("price")} placeholder="price" />
        <br />
        <Button type="submit" style={{ marginTop: "5px" }} variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddAProduct;
