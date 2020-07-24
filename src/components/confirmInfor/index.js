import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actBuy } from './../../actions/index';
import {callAPI} from '../../services/callAPI';
import { Button } from 'antd';
const style = {
    display: 'flex'
}
const ConfirmInfor = (props) => {
    const infor = props.infor
    let cartItems = props.cartItems;
    const [isBuy, setIsBuy] = React.useState(false);
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
    const country = val => {
        let result = '';
        switch (val) {
            case "0":
                result = "Vietnam"
                break;
            case "1":
                result = "Philippines"
                break;
            case "2":
                result = "South Korea"
                break;
            case "3":
                result = "Hongkong"
                break;
            case "4":
                result = "Japan"
                break;
            default:
                break;
        }
        return result;
    }
    const buyProduct = () => {
        const token = localStorage.getItem("token");
        const config = {
            'Authorization' : 'Bearer '+token,
        }
        callAPI(cartItems,"http://localhost:8000/order/",'POST' ,config).then((resp) => {
            if(resp.status===201){
                console.log(resp.status===201);
                props.buy();
                setIsBuy(true);
            }
        })
    }

    if(isBuy) {
        return <Redirect to="/success" />
    }

    console.log(isBuy);

    return (
        <div className="cart-total mb-3">
            <h3>Your Infor</h3>
            <p className="d-flex">
                <span>Name:</span>
                <span>{infor.txtFName} {infor.txtLName}</span>
            </p>
            <p className="d-flex">
                <span>Address:</span>
                <span>{infor.txtAddress}, {infor.txtCity}, {country(infor.sltCountry)}</span>
            </p>
            <p className="d-flex">
                <span>Phone:</span>
                <span>{infor.txtPhone}</span>
            </p>
            <p className="d-flex">
                <span>Email:</span>
                <span>{infor.txtEmail}</span>
            </p>
            <span>Product: </span>
            {cartItems.map((cart, index) => {
                return <p className="d-flex">
                    <span>{cart.product.name}                 x{cart.quantity}</span>
                </p>
            })}

            <hr />
            <p className="d-flex total-price">
                <span>Total</span>
                <span>${totalPrice() - discount()}</span>
            </p>
            <div style={style}>
                <p><NavLink to="/checkout" className="btn btn-outline-success py-3 px-4">Back</NavLink></p>
                <p><button className="btn btn-outline-success py-3 px-4" onClick={buyProduct}>Buy</button></p>
            </div>
        </div>

    )
}
const mapStateToProps = state => {
    return {
        infor: state.infor,
        cartItems: state.carts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buy: () => {
            dispatch(actBuy());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmInfor);