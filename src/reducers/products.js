// var initialState = [
//     {
//         id: 'a1',
//         src: 'images/product-1.jpg',
//         name: 'BELL PEPPER',
//         price: 100,

//     },
//     {
//         id: 'a2',
//         src: 'images/product-2.jpg',
//         name: 'STRAWBERRY',
//         price: 120,

//     },
//     {
//         id: 'a3',
//         src: 'images/product-3.jpg',
//         name: 'GREEN BEANS',
//         price: 110,

//     },
//     {
//         id: 'a4',
//         src: 'images/product-4.jpg',
//         name: 'PURPLE CABBAGE',
//         price: 120,

//     },
//     {
//         id: 'a5',
//         src: 'images/product-5.jpg',
//         name: 'TOMATOE',
//         price: 150,

//     },
//     {
//         id: 'a6',
//         src: 'images/product-6.jpg',
//         name: 'BROCOLLI',
//         price: 130,

//     },
//     {
//         id: 'a7',
//         src: 'images/product-7.jpg',
//         name: 'CARROTS',
//         price: 125,

//     },
//     {
//         id: 'a8',
//         src: 'images/product-8.jpg',
//         name: 'FRUIT JUICE',
//         price: 130,

//     },
//     {
//         id: 'a9',
//         src: 'images/product-9.jpg',
//         name: 'ONION',
//         price: 135,

//     },
//     {
//         id: 'a10',
//         src: 'images/product-10.jpg',
//         name: 'APPLE',
//         price: 100,

//     },
//     {
//         id: 'a11',
//         src: 'images/product-11.jpg',
//         name: 'GARLIC',
//         price: 90,

//     },
//     {
//         id: 'a12',
//         src: 'images/product-12.jpg',
//         name: 'CHILLI',
//         price: 140,

//     },

// ];
var initialState = [{
    id: 0,
    name: "The Family T-Shirt In Tan",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T2012-1.jpg",
    price: 20
},
{
    id: 1,
    name: "The Family T-Shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T2011-1.jpg",
    price: 20
},
{
    id: 2,
    name: "Circuit Board T-Shirt With Reflective In Black",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T1026-1.jpg",
    price: 20
},
{
    id: 3,
    name: "Fire It Up T-Shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T1025-1.jpg",
    price: 20
},
{
    id: 4,
    name: "F-22 Raptor T-Shirt In White",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T1024-5.jpg",
    price: 20
},
{
    id: 5,
    name: "F-22 Raptor T-Shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T1023-6.jpg",
    price: 20
},
{
    id: 6,
    name: "Riot T-Shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/5-AK/T1022-1.jpg",
    price: 20
},
{
    id: 7,
    name: "The Final Awakening T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/4-AK/T2010-1.jpg",
    price: 20
},
{
    id: 8,
    name: "Apollo Spacecraft T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/4-AK/T1021-2.jpg",
    price: 20
},
{
    id: 9,
    name: "Insomnia T-shirt With Reflective In Black",
    src: "https://k300.vn/upload/images/2019/T7/4-AK/T1020-1.jpg",
    price: 20
},
{
    id: 10,
    name: "Fire On Fire T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/4-AK/T1019-1.jpg",
    price: 20
},
{
    id: 11,
    name: "Bad Signal T-shirt With Reflective In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1018-270-1.jpg",
    price: 20
},
{
    id: 12,
    name: "3 Hundred Big Logo T-shirt With Reflective In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1017-280-1.jpg",
    price: 20
},
{
    id: 13,
    name: "Travis Scott T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1016-270-1.jpg",
    price: 20
},
{
    id: 14,
    name: "Salvation T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1015-210-1.jpg",
    price: 20
},
{
    id: 15,
    name: "See All T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1014-250-1.jpg",
    price: 20
},
{
    id: 16,
    name: "Hurricane Frances T-shirt In White",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1013-250-2.jpg",
    price: 20
},
{
    id: 17,
    name: "Hurricane Frances T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1012-250-1.jpg",
    price: 20
},
{
    id: 18,
    name: "Spaceman T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/3-AK/T1011-220-1.jpg",
    price: 20
},
{
    id: 19,
    name: "Faith Death T-shirt In Black",
    src: "https://k300.vn/upload/images/2019/T7/2-AK/T2009-300-2.jpg",
    price: 20
}]

const products = (state = initialState, action) => {
    switch (action.type) {

        default:
            return [...state];
    }
}
export default products;