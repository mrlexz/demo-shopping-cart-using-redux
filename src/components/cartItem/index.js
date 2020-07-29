import React from 'react';
import { NavLink } from 'react-router-dom';
import { increaseItem, decreaseItem, actDelItem } from './../../actions/index';
import { connect } from 'react-redux';
const CartItem = (props) => {
    let styleBtn = {
        width: '20px',
        height: '20px',
        margin: '5px'
    }
 
    let cartItem = props.cartItem.product;
    let quantity = props.quantity;
    let total = cartItem.price * quantity;
    return (
        <tr className="text-center">
            <td className="product-remove"><NavLink to="#" onClick={() => props.deleteItem(cartItem)}><span className="ion-ios-close" /></NavLink></td>
            <td className="image-prod"><div className="img" style={{ backgroundImage: `url(${cartItem.picture})` }} /></td>
            <td className="product-name">
                <h3>{cartItem.name}</h3>
            </td>
            <td className="price">${cartItem.price}</td>
            <td className="price">
                {quantity}
                <button style={styleBtn} type="button" onClick={() => props.increase(cartItem)}>+</button>
                <button style={styleBtn} type="button" onClick={() => props.decrease(cartItem)}>-</button>
            </td>
            <td className="total">${total}</td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (product) => { dispatch(increaseItem(product)) },
        decrease: (product) => { dispatch(decreaseItem(product)) },
        deleteItem: (product) => {
            dispatch(actDelItem(product))
        }
    }
}
export default connect(null, mapDispatchToProps)(CartItem);