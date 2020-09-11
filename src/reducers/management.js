import * as types from './../constants/ActionType';

var initialState = {
    productMana: [],
    orderMana: [],
    userMana: [],
};

const management = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_MANAGE:
            state.productMana = action.payload;
            return {...state};
        case types.ORDER_MANAGE:
            state.orderMana = action.payload;
            return {...state};
        case types.USER_MANAGE:
            state.userMana = action.payload;
            return {...state};
            
        default:
            return state;
    }
}
export default management;