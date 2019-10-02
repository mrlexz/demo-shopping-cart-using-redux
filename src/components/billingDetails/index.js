import React from 'react';
import { connect } from 'react-redux';
import { actChangeForm, actSubmit } from './../../actions/index';
import Payment from './../paymentMethod';
class Billing extends React.Component {
    state = {
        txtFName: '',
        txtLName: '',
        sltCountry: 0,
        txtAddress: '',
        txtCity: '',
        txtCode: '',
        txtPhone: '',
        txtEmail: ''
    };
    changeFormHandler = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })
        this.props.changeForm(this.state);
    }
    onSubmitFormHandler = () => {
        this.props.submitForm();

    }
    render() {
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
                                    // value={this.props.Infors.txtFName}
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="txtLName"
                                    // value={this.props.Infors.txtLName}
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="w-100" />
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="country">State / Country</label>
                                <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                    <select className="form-control"
                                        name="sltCountry"
                                        value={this.state.sltCountry}
                                        onChange={this.changeFormHandler}
                                    >
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
                                    // value={this.props.Infors.txtAddress}
                                    placeholder="House number and street name"
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="w-100" />
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="towncity">Town / City</label>
                                <input type="text" className="form-control"
                                    name="txtCity"
                                    // value={this.props.Infors.txtCity}
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="postcodezip">Postcode / ZIP *</label>
                                <input type="text" className="form-control"
                                    name="txtCode"
                                    // value={this.props.Infors.txtCode}
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="w-100" />
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control"
                                    name="txtPhone"
                                    // value={this.props.Infors.txtPhone}
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="emailaddress">Email Address</label>
                                <input type="text" className="form-control"
                                    name="txtEmail"
                                    // value={this.props.Infors.txtEmail}
                                    onChange={this.changeFormHandler} />
                            </div>
                        </div>
                        <div className="w-100" />
                    </div>
                    <Payment SubmitFormHand={this.onSubmitFormHandler} />
                </form>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        Infors: state.infor
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Billing);