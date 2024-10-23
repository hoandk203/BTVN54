const productsReducer = (state, action) => {
    switch (action.type) {
        case "products/load":
            return action.payload;
        default:
            return state;
    }
};

export default productsReducer;
