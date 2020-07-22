import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import menus from './menus';
import infor from './infor';
import login from './login';
import register from './register';
import userProfile from './userProfile';

const appReducers = combineReducers({
    products,
    carts,
    menus,
    infor,
    login,
    register,
    userProfile
});

export default appReducers;
