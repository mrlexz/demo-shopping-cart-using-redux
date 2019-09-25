import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Sub from '../../components/subcribe';
import { connect } from 'react-redux';
import DetailsProduct from '../../components/details-product';

const ProductDetails = (props) => {
    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <DetailsProduct product={props.product_detail_id} />
            <Sub />
            <Footer />
        </div>
    )
}
const mapStateToProps = (state, props) => {
    let index = props.match.params.id;
    console.log(index);
    return {
        product_detail_id: state.products[index - 1]
    }
}

export default connect(mapStateToProps, null)(ProductDetails);