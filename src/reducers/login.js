import * as types from './../constants/ActionType';
import {callAPI} from '../services/callAPI';
var initialState = {
    isLogin: false,
};
const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            localStorage.setItem("token", action.payload.access);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("userName", action.payload.username);
            localStorage.setItem("isAdmin", action.payload.is_superuser);
            return {...state, isLogin: true, ...action.payload};
        case types.LOG_OUT:
            state = {isLogin: false};
            return state;
        default:
            return state;
    }
}
export default login;