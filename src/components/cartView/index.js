import React from 'react';
import CartItem from '../cartItem';
import CartTotals from '../cartTotals';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const CartView = (props) => {
    let cartItems = props.cartItems;
    return (
        <section className="ftco-section ftco-cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                        <div className="cart-list">
                            <table className="table">
                                <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((Item, index) => {
                                        return <CartItem key={index} cartItem={Item} quantity={Item.quantity}></CartItem>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row justify-content">
                    <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                        <p><NavLink to="/products" className="btn btn-primary py-3 px-4">Back to Shopping</NavLink></p>
                    </div>
                    <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                        <CartTotals />
                        <p><NavLink to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</NavLink></p>
                    </div>
                </div>
            </div>
        </section >
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.carts
    }
}
export default connect(mapStateToProps)(CartView);