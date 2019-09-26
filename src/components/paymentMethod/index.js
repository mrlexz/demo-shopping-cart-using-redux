import React from 'react';
import { NavLink } from 'react-router-dom';
const PaymentMeth = () => {
    return (
        <div className="cart-detail p-3 p-md-4">
            <h3 className="billing-heading mb-4">Payment Method</h3>
            <div className="form-group">
                <div className="col-md-12">
                    <div className="radio">
                        <label><input type="radio" name="optradio" className="mr-2" /> Direct Bank Tranfer</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-12">
                    <div className="radio">
                        <label><input type="radio" name="optradio" className="mr-2" /> Check Payment</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-12">
                    <div className="radio">
                        <label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-12">
                    <div className="checkbox">
                        <label><input type="checkbox" defaultValue className="mr-2" /> I have read and accept the terms and conditions</label>
                    </div>
                </div>
            </div>
            <p><NavLink to="/confirmcheckout" className="btn btn-primary py-3 px-4">Place an order</NavLink></p>
        </div>

    )
}
export default PaymentMeth;