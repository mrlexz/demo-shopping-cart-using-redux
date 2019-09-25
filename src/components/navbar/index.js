import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const Navbar = (props) => {
    let cartItems = props.cartItems;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">Vegefoods</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
	      </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>
                        <li className="nav-item"><NavLink to="/checkout" className="nav-link">Checkout</NavLink></li>
                        <li className="nav-item cta cta-colored"><NavLink to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[{cartItems.length}]</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
const mapStateToProps = state => {
    return {
        cartItems: state.carts
    }
}
export default connect(mapStateToProps)(Navbar);