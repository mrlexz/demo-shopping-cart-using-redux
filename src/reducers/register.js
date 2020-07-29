import * as types from './../constants/ActionType';
import {callAPI} from '../services/callAPI';
var initialState = {
    isRegistered: false,
};
const register = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            return state;
        default:
            return state;
    }
}
export default register;