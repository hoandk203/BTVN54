import { Home, CartMain, ProductMain, ProductDetail } from "../pages/index.js";

const publicRoutes = {
    routes: [
        {
            path: "/",
            element: Home,
        },
        {
            path: "/cart",
            element: CartMain,
        },
        {
            path: "/products",
            element: ProductMain,
        },
        {
            path: "/products/:id",
            element: ProductDetail,
        },
    ],
};

export default publicRoutes;
