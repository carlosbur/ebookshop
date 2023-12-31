import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productsReducer from './products/products.slice';
import categoriesReducer from "./categories/categories.slice";
import cartReducer from './cart/cart.slice';
import { categoriesApi } from "./categories/api";
import addressReducer from './address/address.slice';
import { productsApi } from "./products/api";
import { ordersApi } from "./orders/api";
import { authApi } from "./auth/api";
import authReducer from './auth/auth.slice'
import { settingsApi } from "./settings/api";
import { mapsApi } from "./maps/api";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        auth: authReducer,
        address: addressReducer,
        [categoriesApi.reducerPath] : categoriesApi.reducer,
        [productsApi.reducerPath] : productsApi.reducer,
        [ordersApi.reducerPath] : ordersApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [settingsApi.reducerPath] : settingsApi.reducer,
        [mapsApi.reducerPath] : mapsApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        categoriesApi.middleware, 
        productsApi.middleware, 
        ordersApi.middleware,
        authApi.middleware,
        settingsApi.middleware,
        mapsApi.middleware
        )
});

setupListeners(store.dispatch);