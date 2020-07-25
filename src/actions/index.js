import * as types from './../constants/ActionType';
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const increaseItem = (product) => {
    return {
        type: types.INCREASE_ITEM,
        product
    }
}

export const decreaseItem = (product) => {
    return {
        type: types.DECREASE_ITEM,
        product
    }
}
export const actDelItem = (product) => {
    return {
        type: types.DEL_ITEM,
        product
    }
}
export const actChangeForm = (inforCustomer) => {
    return {
        type: types.CHANGE_FORM,
        inforCustomer
    }
}
export const actSubmit = () => {
    return {
        type: types.SUBMIT_FORM
    }
}
export const actBuy = () => {
    return {
        type: types.BUY
    }
}

export const register = (data) => {
    return {
        type: types.REGISTER,
        payload: data
    }
}

export const login = (data) => {
    return {
        type: types.LOG_IN,
        payload: data
    }
}

export const getProduct = (data) => {
    return {
        type: types.GET_PRODUCT,
        payload: data
    }
}

export const getUserProfile = (data) => {
    return {
        type: types.GET_USER_PROFILE,
        payload: data
    }
}

export const logout = () => {
    return {
        type: types.LOG_OUT,
    }
}

export const getProductManagement = (data) => {
    return {
        type: types.PRODUCT_MANAGE,
        payload: data
    }
}

export const getOderManagement = (data) => {
    return {
        type: types.ORDER_MANAGE,
        payload: data
    }
}

export const getUserManagement = (data) => {
    return {
        type: types.USER_MANAGE,
        payload: data
    }
}

