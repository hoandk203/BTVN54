import productsReducer from "./productsReducer.js";
import cartsReducer from "./cartsReducer.js";

const initialState = {
    products: [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 100,
            imgUrl: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: 200,
            imgUrl: "https://picsum.photos/200/300",
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa3",
            price: 300,
            imgUrl: "https://picsum.photos/200/300",
        },
        {
            id: 4,
            name: "Product 4",
            description: "Description 4",
            price: 400,
            imgUrl: "https://picsum.photos/200/300",
        },
        {
            id: 5,
            name: "Product 5",
            description: "Description 5",
            price: 500,
            imgUrl: "https://picsum.photos/200/300",
        },
    ],
    carts: [],
};

const reducer = (state = initialState, action) => {
    return {
        products: productsReducer(state.products, action),
        carts: cartsReducer(state.carts, action),
    };
};

export default reducer;
