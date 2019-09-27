import React from 'react';
import { connect } from 'react-redux';
import { actChangeForm, actSubmit } from './../../actions/index';
import Payment from './../paymentMethod';
const Billing = (props) => {
    const changeFormHandler = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        // let infor = {
        //     [name]: value
        // }
        console.log({ [name]: value });
        props.changeForm({ [name]: value });
    }
    const onSubmitFormHandler = () => {
        props.submitForm();
    }
    return (
        <div className="col-xl-7 ftco-animate fadeInUp ftco-animated">
            <form className="billing-form" >
                <h3 className="mb-4 billing-heading">Billing Details</h3>
                <div className="row align-items-end">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="firstname">Firt Name</label>
                            <input type="text"
                                className="form-control"
                                name="txtFName"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text"
                                className="form-control"
                                name="txtLName"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="country">State / Country</label>
                            <div className="select-wrap">
                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                <select className="form-control" name="sltCountry" onChange={changeFormHandler}>
                                    <option value={0}>Vietnam</option>
                                    <option value={1}>Philippines</option>
                                    <option value={2}>South Korea</option>
                                    <option value={3}>Hongkong</option>
                                    <option value={4}>Japan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="streetaddress">Street Address</label>
                            <input type="text"
                                className="form-control"
                                name="txtAddress"
                                placeholder="House number and street name"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="towncity">Town / City</label>
                            <input type="text" className="form-control"
                                name="txtCity"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="postcodezip">Postcode / ZIP *</label>
                            <input type="text" className="form-control"
                                name="txtCode"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control"
                                name="txtPhone"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="emailaddress">Email Address</label>
                            <input type="text" className="form-control"
                                name="txtEmail"
                                onChange={changeFormHandler} />
                        </div>
                    </div>
                    <div className="w-100" />
                </div>
                <Payment SubmitFormHand={onSubmitFormHandler} />
            </form>
        </div>

    )
}
const mapDispatchToProps = dispatch => {
    return {
        changeForm: (infor) => {
            dispatch(actChangeForm(infor));
        },
        submitForm: () => {
            dispatch(actSubmit());
        }
    }
}
export default connect(null, mapDispatchToProps)(Billing);