import * as types from './../constants/ActionType';

var initialState = [

];

const productApris = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_APRI:
            state = action.payload;
            return [...state];
            
        default:
            return [...state];
    }
}
export default productApris;