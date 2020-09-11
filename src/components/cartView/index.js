import React from 'react';
import { Carousel } from 'antd';
import Product from '../product';
import CartItem from '../cartItem';
import CartTotals from '../cartTotals';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { callAPI } from '../../services/callAPI';
import { actAddToCart, getProduct, getProductApri } from './../../actions/index';
function CartView(props) {
    let cartItems = props.cartItems;
    let products = props.products;
    let onAddToCart = props.onAddToCart;
    let listCators = props.listCators;

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            'Authorization': 'Bearer ' + token,
        }
        callAPI({ product: listCators }, "http://127.0.0.1:8000/apriori/", 'POST', config).then(resp => {
            if (resp && resp.status === 200) {
                props.onGetProductApri(resp.data);
            }
        }).catch(err => {
            console.log(err);
        });
        console.log(listCators);
    }, []);

    return (
        <section className="ftco-section">
            <div className="container">

                <div className="row">
                    <div className="col-md-9 ftco-animate fadeInUp ftco-animated">
                        <div className="cart-list">
                            <table className="table">
                                <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        <th>Image</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((Item, index) => {
                                        return <CartItem key={index} cartItem={Item} quantity={Item.quantity}></CartItem>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-3 ftco-animate fadeInUp ftco-animated ftco-cart">
                        <CartTotals />
                        <p style={{ display: 'flex', justifyContent: 'center' }}>
                            <NavLink to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</NavLink></p>

                    </div>
                </div>

                <div className="row justify-content" style={{ marginBottom: '30px' }}>
                    <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                        <p><NavLink to="/products" className="btn btn-primary py-3 px-4">Back to Shopping</NavLink></p>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <h3>Can you need!</h3>
                        <Carousel autoplay>

                            {products?.map((product, index) => {
                                return (
                                    <div className="slide-custom" key={index}>
                                        <Product key={index} product={product} onAddToCart={onAddToCart} />
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>

            </div>
        </section >
    )
}



const mapStateToProps = state => {
    return {
        infor: state.login,
        cartItems: state.carts,
        products: state.productApris,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onGetProductApri: (items) => {
            dispatch(getProductApri(items));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartView);