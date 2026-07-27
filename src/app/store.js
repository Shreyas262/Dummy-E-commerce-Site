import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import cartPersistenceMiddleware from './cartPersistenceMiddleware'

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cartPersistenceMiddleware)
})

export default store