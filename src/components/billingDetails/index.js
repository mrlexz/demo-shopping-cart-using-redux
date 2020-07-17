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