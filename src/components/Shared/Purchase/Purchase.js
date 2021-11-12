import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Purchase = () => {
    const { _id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState([]);
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
        axios.post('http://localhost:4000/purchases', purchaseInfo)
            .then(res => console.log(res))
        e.preventDefault();
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
            <h2>This is purchasing page: {_id}</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="name"
                    id="filled-size-normal"
                    name="userName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    variant="standard"
                /> <br />
                <TextField
                    label="email"
                    id="filled-size-normal"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    variant="standard"
                /> <br />
                <TextField
                    label="name"
                    id="filled-size-normal"
                    name="productName"
                    onBlur={handleOnBlur}
                    value={productName}
                    variant="standard"
                /> <br />
                <TextField
                    label="address"
                    id="filled-size-normal"
                    name="address"
                    onBlur={handleOnBlur}
                    placeholder="Address"
                    variant="standard"
                /> <br />
                <TextField
                    label="phone"
                    id="filled-size-normal"
                    name="phone"
                    onBlur={handleOnBlur}
                    placeholder="Phone"
                    variant="standard"
                /> <br />
                <TextField
                    type="number"
                    id="filled-size-normal"
                    name="price2"
                    value={price}
                    placeholder="price"
                    variant="standard"
                /> <br />
                <Button type="submit" variant="contained">Purchase</Button>

            </form>
        </div >
    );
};

export default Purchase;