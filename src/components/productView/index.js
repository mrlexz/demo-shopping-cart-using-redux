import React from 'react';
import Product from '../product';
import * as types from '../../constants/ActionType';
import * as constants from '../../services/constants'
import {callAPI} from '../../services/callAPI';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddToCart, getProduct } from './../../actions/index';
const ProductView = (props) => {
    let products = props.products;
    let onAddToCart = props.onAddToCart;

    React.useEffect(() => {
        callAPI(null, constants.API_URL, 'GET').then((resp) => {
            props.onGetProduct(resp.data);
        })
    }, [])
    return (
        <section className="ftco-section">
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="col-md-10 mb-5 text-center">
                        <ul className="product-category">
                            <li><NavLink to="#" className="active">All</NavLink></li>
                        </ul>
                    </div>
                </div> */}
                <div className="row">
                    {products?.map((product, index) => {
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
        },
        onGetProduct: (items) => {
            dispatch(getProduct(items));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView);