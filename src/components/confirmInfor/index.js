import React from 'react';
import { NavLink } from 'react-router-dom';
const ConfirmInfor = (props) => {
    return (
        <div className="cart-total mb-3">
            <h3>Your Infor</h3>
            <p className="d-flex">
                <span>Name:</span>
                <span>$aaaaaaaaaa</span>
            </p>
            <p className="d-flex">
                <span>Address:</span>
                <span>$0.00</span>
            </p>
            <p className="d-flex">
                <span>Phone:</span>
                <span>$aaaaaaaaaaa</span>
            </p>
            <p className="d-flex">
                <span>Email:</span>
                <span>$aaaaaaaaaaa</span>
            </p>
            <p className="d-flex">
                <span>Payment Method:</span>
                <span>$aaaaaaaaaaa</span>
            </p>
            <hr />
            <p className="d-flex total-price">
                <span>Total</span>
                <span>aaaaaaaaaaaaaa</span>
            </p>
            <p><NavLink to="/success" className="btn btn-outline-success py-3 px-4">Buy</NavLink></p>
        </div>

    )
}

export default ConfirmInfor;