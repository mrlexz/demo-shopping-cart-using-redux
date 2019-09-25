import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const product = props.product;
    const image = product.src;
    const onAddToCart = (product) => {
        props.onAddToCart(product);
    }
    return (
        <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
            <div className="product">
                <NavLink to={`/product-details/${product.id}`} className="img-prod"><img className="img-fluid" src={image} alt="Colorlib Template" />
                    <div className="overlay" />
                </NavLink>
                <div className="text py-3 pb-4 px-3 text-center">
                    <h3><NavLink to="#">{product.name}</NavLink></h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span className="price-sale">${product.price}</span></p>
                        </div>
                    </div>
                    <div className="bottom-area d-flex px-3">
                        <div className="m-auto d-flex">
                            <NavLink to={`/product-details/${product.id}`} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                <span><i className="ion-ios-menu" /></span>
                            </NavLink>
                            <NavLink to="/cart" className="buy-now d-flex justify-content-center align-items-center mx-1"
                                onClick={() => onAddToCart(product)}
                            >
                                <span><i className="ion-ios-cart" /></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Product;