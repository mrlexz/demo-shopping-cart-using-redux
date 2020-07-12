import * as types from './../constants/ActionType';
import {callAPI} from '../services/callAPI';
var initialState = {

};
const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            const result = callAPI(action.payload, 'http://localhost:8000/auth/token/', 'POST')
            state = result;
            return state;
        default:
            return state;
    }
}
export default login;