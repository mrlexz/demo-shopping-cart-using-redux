import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Sub from '../../components/subcribe';
import Billing from '../../components/billingDetails';
import CartTotals from '../../components/cartTotals';
const Checkout = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <Banner />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <Billing />
                        <div className="col-xl-5">
                            <div className="row mt-5 pt-3">
                                <div className="col-md-12 d-flex mb-5">
                                    <CartTotals />
                                </div>
                            </div>
                        </div> {/* .col-md-8 */}
                    </div>
                </div>
            </section>
            <Sub />
            <Footer />
        </div>
    )
}
export default Checkout;