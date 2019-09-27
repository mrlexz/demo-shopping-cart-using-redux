import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actChangeForm } from './../../actions/index';
const PaymentMeth = (props) => {
    // const changeFormHandler = (event) => {
    //     let target = event.target;
    //     let value = target.value;
    //     let name = target.name;
    //     const infor = {
    //         [name]: value
    //     }
    //     event.preventDefault();
    //     props.onChangeHandler(infor);
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        props.SubmitFormHand();
    }
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
            <button type="submit" onClick={submitHandler} className="btn btn-primary py-3 px-4">
                <NavLink to="/confirmcheckout" >
                    Place an order
                </NavLink></button>
        </div>

    )
}
const mapDispatchToProps = dispatch => {
    return {
        changeForm: (infor) => {
            dispatch(actChangeForm(infor));
        }

    }
}
export default connect(null, mapDispatchToProps)(PaymentMeth);