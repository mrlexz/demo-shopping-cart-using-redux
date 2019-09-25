import React from 'react';
import Products from './Pages/Products/products';
import Cart from './Pages/Cart/cart';
import ProductDetails from './Pages/Product-details/product-details';
import Checkout from './Pages/Checkout/checkout';
import Home from './Pages/Home/home';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='container'>

        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </BrowserRouter>
  );
}

export default App;
