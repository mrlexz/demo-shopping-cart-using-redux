import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// const MenuLink = ({ lable, to, activeOnlyExact }) => {
//     return (
//         <Route path={to} exact={activeOnlyExact} children={({ match }) => {
//             var active = match ? "active" : "";
//             return (
//                 <li className={`nav-item ${active}`}>
//                     <NavLink to={to} className="nav-link">{lable}</NavLink>
//                 </li>
//             )
//         }}>

//         </Route>
//     )
// }
const Navbar = (props) => {
    let cartItems = props.cartItems;
    // let menus = props.menus;
    // const showMenus = (menus) => {
    //     let result = null;
    //     if (menus.length > 0) {
    //         result = menus.map((menu, index) => {
    //             return <MenuLink key={index} lable={menu.name} to={menu.to} activeOnlyExact={menu.exact}></MenuLink>
    //         })
    //     }
    //     return result;
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">MEN'S COLLECTION</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
	      </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>
                        <li className="nav-item"><NavLink to="/checkout" className="nav-link">Checkout</NavLink></li>

                        {/* {showMenus(menus)} */}
                        <li className="nav-item cta cta-colored"><NavLink to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[{cartItems.length}]</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
const mapStateToProps = state => {
    return {
        cartItems: state.carts,
        menus: state.menus
    }
}
export default connect(mapStateToProps)(Navbar);