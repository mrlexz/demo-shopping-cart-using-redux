import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Sub from '../../components/subcribe';

import ConfirmInfor from '../../components/confirmInfor';

const ConfirmCheckout = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <section className="ftco-section">
                <div className="container">
                    <ConfirmInfor />
                </div>
            </section>
            <Sub />
            <Footer />
        </div>
    )
}
export default ConfirmCheckout;