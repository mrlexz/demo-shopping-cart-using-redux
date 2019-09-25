import React from 'react';
import Product from '../product';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddToCart } from './../../actions/index';
const ProductView = (props) => {
    let products = props.products;
    let onAddToCart = props.onAddToCart;
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 mb-5 text-center">
                        <ul className="product-category">
                            <li><NavLink to="#" className="active">All</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {products.map((product, index) => {
                        return <Product key={index} product={product} onAddToCart={onAddToCart} />
                    })}
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView);