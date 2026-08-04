// redux store for global client state
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slice/cartSlice'
import wishlistReducer from './slice/wishlistSlice'
import authReducer from './slice/authSlice'
import persistenceMiddleware from "./middleware/PersistenceMiddleware"
import { loadCart, loadUser, loadWishlist } from "../utils/localStorage"

const user = loadUser();
const cartItems = user ? loadCart(user.id) : [];
const wishlistItems = user ? loadWishlist(user.id) : [];

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
    middleware: getDefaultMiddleware => (
        getDefaultMiddleware().concat(persistenceMiddleware)
    ),
    preloadedState: {
        auth: {
            isAuthenticated: Boolean(user),
            user,
        },
        cart: {items: cartItems},
        wishlist: {items: wishlistItems},
    },
})

export default store