var initialState = [

    {
        name: 'Products',
        to: '/products',
        exact: false
    },
    {
        name: 'Checkout',
        to: '/checkout',
        exact: false
    }
];
const menus = (state = initialState, action) => {
    switch (action.type) {

        default:
            return [...state];
    }
};
export default menus;