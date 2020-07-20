import * as types from './../constants/ActionType';
import {callAPI} from '../services/callAPI';
var initialState = {
    isLogin: false,

};
const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            localStorage.setItem("token", action.payload.access)
            return {...state, isLogin: true, ...action.payload};
        default:
            return state;
    }
}
export default login;