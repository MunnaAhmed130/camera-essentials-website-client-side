import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <Reviews />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;