import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import menus from './menus';
const appReducers = combineReducers({
    products,
    carts,
    menus
});

export default appReducers;
