import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Sub from '../../components/subcribe';
import CartView from '../../components/cartView';
import { actAddToCart, getProduct } from './../../actions/index';
const Cart = (props) => {

    const [state, setState] = React.useState([]);

    let cartItems = props.cartItems;
    let products = props.products;
    let resu = cartItems?.map(item => item?.product?.category)

    const reduceFunc = (array ) => {
        return array.filter((item, index) => array.indexOf(item) === index);
    }

    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <CartView listCators={reduceFunc(resu)} />
            <Sub />
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        infor: state.login,
        cartItems: state.carts,
        products: state.products
    }
}
    
const mapDispatchToProps = (dispatch) => {
        return {
            onAddToCart: (product) => {
                dispatch(actAddToCart(product, 1));
            },
            onGetProduct: (items) => {
                dispatch(getProduct(items));
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);