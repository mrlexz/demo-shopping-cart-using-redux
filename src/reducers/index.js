import { combineReducers } from 'redux';
import productApris from './productApri';
import products from './products';
import carts from './carts';
import menus from './menus';
import infor from './infor';
import login from './login';
import register from './register';
import userProfile from './userProfile';
import management from './management';

const appReducers = combineReducers({
    products,
    carts,
    menus,
    infor,
    login,
    register,
    userProfile,
    management,
    productApris
});

export default appReducers;
