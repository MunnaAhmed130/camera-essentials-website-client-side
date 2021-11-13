import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-reaches-30016.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div>
            <h2>Manage Products</h2>
            <Row xs={1} sm={1} md={2} lg={3} className="">
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;