var initialState = [
    {
        id: 'a1',
        src: 'images/product-1.jpg',
        name: 'STRONGBOW',
        price: 100,

    },
    {
        id: 'a2',
        src: 'images/product-2.jpg',
        name: 'HEINEKEN',
        price: 120,

    },
    {
        id: 'a3',
        src: 'images/tiger.jpg',
        name: 'TIGER',
        price: 110,

    },
    {
        id: 'a4',
        src: 'images/sagonxanh.jpg',
        name: 'SAIGON BLUE',
        price: 120,

    },
    {
        id: 'a5',
        src: 'images/333.jpg',
        name: '333 BEER',
        price: 150,

    },
    {
        id: 'a6',
        src: 'images/larue2.jpg',
        name: 'LARUE BLUE',
        price: 130,

    },
    {
        id: 'a7',
        src: 'images/larue3.jpg',
        name: 'LARUE YELLOW',
        price: 125,

    },
    {
        id: 'a8',
        src: 'images/budwei.jpg',
        name: 'BUDWEISER',
        price: 130,

    },
    {
        id: 'a9',
        src: 'images/sutu.jpg',
        name: 'WHITE LION',
        price: 135,

    },
    {
        id: 'a10',
        src: 'images/tubo.jpg',
        name: 'TUBORG',
        price: 100,

    },
    {
        id: 'a11',
        src: 'images/sgs.jpg',
        name: 'SAIGON SPECIAL',
        price: 90,

    },
    {
        id: 'a12',
        src: 'images/corona.jpg',
        name: 'CORONA BEER',
        price: 140,

    },

];

const products = (state = initialState, action) => {
    switch (action.type) {

        default:
            return [...state];
    }
}
export default products;