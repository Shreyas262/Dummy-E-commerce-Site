// redux store for global client state
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import authReducer from '../features/auth/authSlice'
import cartPersistenceMiddleware from './cartPersistenceMiddleware'
import wishlistPersistenceMiddleware from "./wishlistPersistenceMiddleware"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cartPersistenceMiddleware, wishlistPersistenceMiddleware)
})

export default store