import React from 'react';
import { connect } from 'react-redux';
const CartTotals = (props) => {
    let cartItems = props.cartItems;
    // let quantityItem = props.cartItems.quantity;
    const getQuantity = (initStateCarts) => {
        initStateCarts = cartItems;
        let quantity = 0;
        for (let i = 0; i < initStateCarts.length; i++) {
            quantity += initStateCarts[i].quantity;
        }
        return quantity;
    }
    const totalPrice = (initStateCarts) => {
        initStateCarts = cartItems;
        let totalPrice = 0;
        for (let i = 0; i < initStateCarts.length; i++) {
            totalPrice += initStateCarts[i].product.price * initStateCarts[i].quantity;
        }
        return totalPrice;
    }
    const discount = () => {
        let discount = 0;
        if (getQuantity() > 10) {
            discount = ((totalPrice() * 5) / 100);
        } else {
            discount = 0;
        }
        return discount;
    }
    return (

        <div className="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p className="d-flex">
                <span>Subtotal</span>
                <span>${totalPrice()}({getQuantity()} item)</span>
            </p>
            <p className="d-flex">
                <span>Delivery</span>
                <span>$0.00</span>
            </p>
            <p className="d-flex">
                <span>Discount</span>
                <span>${discount()}</span>
            </p>
            <hr />
            <p className="d-flex total-price">
                <span>Total</span>
                <span>${totalPrice() - discount()}</span>
            </p>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.carts
    }
}
export default connect(mapStateToProps)(CartTotals);