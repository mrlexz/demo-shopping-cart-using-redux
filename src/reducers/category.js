import * as types from './../constants/ActionType';
import {callAPI} from '../services/callAPI';
var initialState = [];
const category = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORY:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default category;