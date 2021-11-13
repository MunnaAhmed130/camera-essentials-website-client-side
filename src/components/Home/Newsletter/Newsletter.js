import React from 'react';
import './Newsletter.css';


const Newsletter = () => {

    return (
        <div className="newsletter">
            <div className="newsletter-info">
                <h2>SUBSCRIBE OUR NEWLETTER</h2> <br />
                <h3>GET UPDATE FOR NEWS, OFFERS</h3> <br />
                <form ><input type="email" placeholder="Email" /></form>
            </div>

        </div>
    );
};

export default Newsletter;