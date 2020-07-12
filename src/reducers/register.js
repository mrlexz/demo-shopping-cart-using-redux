import * as types from './../constants/ActionType';
import {callAPI} from '../services/callAPI';
var initialState = {

};
const register = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            const abc = action.payload;
            const result = callAPI(abc,'http://localhost:8000/myUser/', 'POST')
            state = result;
            console.log(state);
            return state;
        default:
            return state;
    }
}
export default register;