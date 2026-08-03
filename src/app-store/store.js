// redux store for global client state
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/cartSlice'
import wishlistReducer from './slice/wishlistSlice'
import authReducer from './slice/authSlice'
import cartPersistenceMiddleware from './middleware/cartPersistenceMiddleware'
import wishlistPersistenceMiddleware from "./middleware/wishlistPersistenceMiddleware"
import authPersistenceMiddleware from "./middleware/authPersistenceMiddleware"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => (
        getDefaultMiddleware()
            .concat(
                cartPersistenceMiddleware,
                wishlistPersistenceMiddleware,
                authPersistenceMiddleware
        )
    )
})

export default store