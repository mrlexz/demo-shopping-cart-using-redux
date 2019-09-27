import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import menus from './menus';
import infor from './infor';
const appReducers = combineReducers({
    products,
    carts,
    menus,
    infor
});

export default appReducers;
