var initialState = [
    {
        id: 1,
        src: 'images/product-1.jpg',
        name: 'BELL PEPPER',
        price: 100,

    },
    {
        id: 2,
        src: 'images/product-2.jpg',
        name: 'STRAWBERRY',
        price: 120,

    },
    {
        id: 3,
        src: 'images/product-3.jpg',
        name: 'GREEN BEANS',
        price: 110,

    },
    {
        id: 4,
        src: 'images/product-4.jpg',
        name: 'PURPLE CABBAGE',
        price: 120,

    },
    {
        id: 5,
        src: 'images/product-5.jpg',
        name: 'TOMATOE',
        price: 150,

    },
    {
        id: 6,
        src: 'images/product-6.jpg',
        name: 'BROCOLLI',
        price: 130,

    },
    {
        id: 7,
        src: 'images/product-7.jpg',
        name: 'CARROTS',
        price: 125,

    },
    {
        id: 8,
        src: 'images/product-8.jpg',
        name: 'FRUIT JUICE',
        price: 130,

    },
    {
        id: 9,
        src: 'images/product-9.jpg',
        name: 'ONION',
        price: 135,

    },
    {
        id: 10,
        src: 'images/product-10.jpg',
        name: 'APPLE',
        price: 100,

    },
    {
        id: 11,
        src: 'images/product-11.jpg',
        name: 'GARLIC',
        price: 90,

    },
    {
        id: 12,
        src: 'images/product-12.jpg',
        name: 'CHILLI',
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