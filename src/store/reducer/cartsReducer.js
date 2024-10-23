const cartsReducer = (state, action) => {
    switch (action.type) {
        case "carts/load":
            return action.payload;
        case "carts/add":
            return action.payload;
        default:
            return state;
    }
};

export default cartsReducer;
