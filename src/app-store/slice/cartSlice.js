// Creating the cartSlice to perform different actions on the cart elements 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // action to set cart of current user
        setCart: (state, { payload }) => {
            state.items = payload
        },

        // action for adding an item to the cart
        addToCart: (state, { payload }) => {
            const existingItem = state.items.find(item => item.id === payload.id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({
                    ...payload,
                    quantity: 1,
                })
            }
        },

        // action for removing an item from cart
        removeFromCart: (state, { payload }) => {
            state.items = state.items.filter(item =>
                item.id !== payload
            );
             
        },

        // action to increase quantity of an item in the cart
        increaseQuantity: (state, { payload }) => {
            const existingItem = state.items.find(item => item.id === payload);
            if (existingItem) {
                existingItem.quantity += 1;
            }
             
        },

        // action to decrease quantity of an item in the cart
        decreaseQuantity: (state, { payload }) => {
            const existingItem = state.items.find(item => item.id === payload);
            if(existingItem){
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item =>
                    item.id !== payload
                    );
                }
            }
             
        },

        // action to clear the entire cart
        clearCart: (state) => {
            state.items = []; 
        },
    }
})

export default cartSlice.reducer
export const { setCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions