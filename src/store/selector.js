const selectProducts = (state) => {
    return state.products;
};

const selectCarts = (state) => {
    return state.carts;
};

export { selectProducts, selectCarts };
