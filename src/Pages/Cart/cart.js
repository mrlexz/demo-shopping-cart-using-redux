import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Sub from '../../components/subcribe';
import CartView from '../../components/cartView';
const Cart = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <Banner />
            <CartView />
            <Sub />
            <Footer />
        </div>
    )
}

export default Cart;