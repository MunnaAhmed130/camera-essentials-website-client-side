import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div>
            <h2>Manage Products</h2>
            <Row xs={1} sm={1} md={2} lg={3} className="products">
                {
                    products.map(product => <ManageProduct key={product.name} product={product}></ManageProduct>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;