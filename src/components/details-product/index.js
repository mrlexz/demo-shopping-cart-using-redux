import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddToCart } from './../../actions/index'
const DetailsProduct = (props) => {
    const product = props.product;
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
                        <NavLink to="#" className="image-popup"><img src={product.picture} className="img-fluid" alt="Colorlib Template" /></NavLink>
                    </div>
                    <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
                        <h3>{product.name}</h3>
                        <div className="rating d-flex">
                            <p className="text-left mr-4">
                                <NavLink to="#" className="mr-2">5.0</NavLink>
                                <NavLink to="#"><span className="ion-ios-star-outline" /></NavLink>
                                <NavLink to="#"><span className="ion-ios-star-outline" /></NavLink>
                                <NavLink to="#"><span className="ion-ios-star-outline" /></NavLink>
                                <NavLink to="#"><span className="ion-ios-star-outline" /></NavLink>
                                <NavLink to="#"><span className="ion-ios-star-outline" /></NavLink>
                            </p>
                            <p className="text-left mr-4">
                                <NavLink to="#" className="mr-2" style={{ color: '#000' }}>100 <span style={{ color: '#bbb' }}>Rating</span></NavLink>
                            </p>
                            <p className="text-left">
                                <NavLink to="#" className="mr-2" style={{ color: '#000' }}>500 <span style={{ color: '#bbb' }}>Sold</span></NavLink>
                            </p>
                        </div>
                        <p className="price"><span>${product.price}</span></p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
              </p>
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <p style={{ color: '#000' }}>Available</p>
                            </div>
                        </div>
                        <p><NavLink to="/cart" className="btn btn-black py-3 px-5" onClick={() => { props.addToCart(product) }}>Add to Cart</NavLink></p>
                        <p><NavLink to="/products" className="btn btn-black py-3 px-5">Back To Shopping</NavLink></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(null, mapDispatchToProps)(DetailsProduct);