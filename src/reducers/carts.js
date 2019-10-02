import * as types from './../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));

// var initState = data ? data : [];
var initState = [];

const carts = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            const { product, quantity } = action;
            let index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({ product, quantity });
            }
            // localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.INCREASE_ITEM:
            let indexIN = findProductInCart(state, action.product);

            state[indexIN].quantity++;

            // localStorage.setItem('CART', JSON.stringify(state));
            return [...state]

        case types.DECREASE_ITEM:
            let indexDE = findProductInCart(state, action.product);
            if (state[indexDE].quantity > 1) {
                state[indexDE].quantity--;
            }
            return [...state];
        case types.DEL_ITEM:

            let indexDel = findProductInCart(state, action.product);
            if (indexDel !== -1) {
                state.splice(indexDel, 1);
            }
            return [...state]
        case types.BUY:
            const newState = [];
            return newState;
        default:
            return [...state];
    }
}
let findProductInCart = (cart, product) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === product.id) {
            index = i;
            break
        }
    }
    return index
}
export default carts;