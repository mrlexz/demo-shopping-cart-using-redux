import * as types from './../constants/ActionType';
var initialState = {

};
const infor = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_FORM:
            const abc = action.inforCustomer;
            state = abc;
            return state;
        case types.SUBMIT_FORM:
            console.log(state);
            return state;
        default:
            return state;
    }
}
export default infor;