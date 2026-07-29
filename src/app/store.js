// redux store for global client state
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import wishlistReducer from '../features/wishlist//wishlistSlice'
import cartPersistenceMiddleware from './cartPersistenceMiddleware'
import wishlistPersistenceMiddleware from "./wishlistPersistenceMiddleware";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cartPersistenceMiddleware, wishlistPersistenceMiddleware)
})

export default store