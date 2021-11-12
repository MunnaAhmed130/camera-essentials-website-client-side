import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Button, Alert } from '@mui/material';
import './Purchase.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Purchase = () => {
    const { _id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState([]);
    const [success, setSuccess] = useState(false);
    const { price } = product;
    const initialInfo = { userName: user.displayName, email: user.email, productName: product.name, price2: product.price, description: product.description, key: product._id, img: product.img }
    const [purchase, setPurchase] = useState(initialInfo)
    const { userName, email, productName, price2, key, img, description } = initialInfo;
    console.log(initialInfo)
    const [userInfo, setUserInfo] = useState({});
    const { address, phone } = userInfo;
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchase };
        newInfo[field] = value;
        setPurchase(newInfo)
        setUserInfo(newInfo)
        console.log(newInfo)
    }
    const handleSubmit = e => {
        //collect data
        const purchaseInfo = {
            userName,
            email,
            productName,
            description,
            price2,
            address: address,
            phone: phone,
            key,
            img
        }
        console.log(purchaseInfo)
        const proceed = window.confirm('Are you sure, you want to Purchase?')
        if (proceed) {
            axios.post('http://localhost:4000/purchases', purchaseInfo)
                .then(res => {
                    // res.statusMessage = 'Pending';
                    console.log(res)

                    if (res.data.insertedId) {

                        setSuccess(true)
                    }
                })
            e.preventDefault();
        }
    }





    useEffect(() => {
        fetch(`http://localhost:4000/products/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    // const onSubmit = data => {
    //     console.log(data)
    //     axios.post('http://localhost:4000/purchases', initialInfo)
    //         .then(res => {
    //             console.log(res)
    //             if (res.data.insertedId) {
    //                 alert('Order Successful')
    //             }
    //         })
    // };
    // console.log(_id);

    console.log(product.price)
    return (
        <div>
            <Header />
            <h2 className="purchase-heading">Place Your Order</h2>
            <Container>
                <Row>
                    <Col md={4} sm={12} lg={6} className="purchase-img-container">
                        <img className="purchase-img" src={img} alt="" />
                    </Col>
                    <Col md={8} sm={12} lg={6}>
                        {success && <Alert severity="success">Order Placed Successfully</Alert>}
                        <form className="purchase-form" onSubmit={handleSubmit}>
                            <input
                                name="userName"
                                defaultValue={user.displayName}
                            /> <br />
                            <input
                                name="email"
                                defaultValue={user.email}
                                variant="outlined"
                            /> <br />
                            <input
                                name="productName"
                                value={productName}
                                variant="outlined"
                            /> <br />
                            <input
                                name="address"
                                onBlur={handleOnBlur}
                                placeholder="Address"
                                defaultValue=""
                                variant="outlined"
                            /> <br />
                            <input
                                name="phone"
                                onBlur={handleOnBlur}
                                placeholder="Phone"
                                defaultValue=""
                                variant="outlined"
                            /> <br />
                            <input
                                type="number"
                                name="price2"
                                value={price}
                                placeholder="price"
                                variant="outlined"
                            /> <br />
                            <Button type="submit" className="purchase-btn" size="large" variant="contained" >Purchase</Button>
                        </form>

                    </Col>

                </Row>
            </Container>
            <Footer />
        </div >
    );
};

export default Purchase;