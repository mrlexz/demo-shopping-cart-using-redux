import React from 'react';
import ProductView from '../../components/productView';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Sub from '../../components/subcribe';
const Products = () => {
    const isLogin = localStorage.getItem("isLogin");
    return ( 
        <div className = "goto-here" >
        <Header />
        <Navbar / >
        <h3 style={{textAlign:'center', marginTop:'20px'}}>Products</h3>
        <ProductView / >
        <Footer / >
        </div>
    )
}
export default Products;