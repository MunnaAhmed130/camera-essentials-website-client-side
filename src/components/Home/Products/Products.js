import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div>
            <h2>This is Products{products.length}</h2>
            <Row xs={1} sm={1} md={2} lg={3} className="products">
                {
                    products.map(product => <Product key={product.name} product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;