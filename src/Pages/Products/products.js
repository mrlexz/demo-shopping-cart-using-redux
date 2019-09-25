import React from 'react';
import ProductView from '../../components/productView';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Sub from '../../components/subcribe';
const Products = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <Banner />
            <ProductView />
            <Sub />
            <Footer />
        </div>
    )
}
export default Products;