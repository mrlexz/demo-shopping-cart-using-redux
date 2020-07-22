import * as types from './../constants/ActionType';
var initialState = {

};
const userProfile = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_PROFILE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
export default userProfile;