// Creating the cartSlice to perform different actions on the cart elements 
import { createSlice } from '@reduxjs/toolkit'
import { saveCart, loadCart } from '../../utils/localStorage';

const initialState = {
    items: loadCart(),
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // action for adding an item to the cart
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
             
        },
        // action for removing an item from cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item =>
                item.id !== action.payload
            );
             
        },
        // action to increase quantity of an item in the cart
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
            }
             
        },
        // action to decrease quantity of an item in the cart
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if(existingItem){
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item =>
                    item.id !== action.payload
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
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions