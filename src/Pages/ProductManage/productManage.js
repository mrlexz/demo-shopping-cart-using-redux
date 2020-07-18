import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ProductManage from '../../components/ProductManage';
const Home = () => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <ProductManage />
            <Footer />
        </div>
    )
}
export default Home;