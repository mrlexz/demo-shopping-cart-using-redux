import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Sub from '../../components/subcribe';
import { connect } from 'react-redux';
import DetailsProduct from '../../components/details-product';
const ProductDetails = (props) => {
    const findProductInCart = (cart, id) => {
        const index = cart.findIndex(item => {
            return item.id.toString() === id;
        })
        return index;
    }
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <DetailsProduct product={props.product_detail_id[findProductInCart(props.products, props.match.params.id)]} />
            <Sub />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        product_detail_id: state.products,
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductDetails);