import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import { NavLink } from 'react-router-dom';
const BuySuccess = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <div className="container">
                <h1>Your order will be processed as quickly as possible!</h1>
                <div className="row justify-content">
                    <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                        <p><NavLink to="/products" className="btn btn-primary py-3 px-4">Back to Shopping</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuySuccess;