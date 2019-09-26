import React from 'react';
import Products from './Pages/Products/products';
import Cart from './Pages/Cart/cart';
import ProductDetails from './Pages/Product-details/product-details';
import Checkout from './Pages/Checkout/checkout';
import ConfirmCheckout from './Pages/ConfirmCheckout/confirmCheckout';
import Home from './Pages/Home/home';
import NotFound from './Pages/NotFound/notfound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/product-details/:id" exact component={ProductDetails} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/confirmcheckout" exact component={ConfirmCheckout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
