const actionProducts = (type, payload) => {
    return {
        type: `products/${type}`,
        payload: payload,
    };
};

const actionCarts = (type, payload) => {
    return {
        type: `carts/${type}`,
        payload: payload,
    };
};

export { actionProducts, actionCarts };
