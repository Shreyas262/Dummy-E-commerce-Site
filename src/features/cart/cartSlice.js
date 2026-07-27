import { createSlice } from '@reduxjs/toolkit'
import { saveCart, loadCart } from '../../utils/localStorage';

const initialState = {
    items: loadCart(),
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
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
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item =>
                item.id !== action.payload
            );
             
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
            }
             
        },
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
        clearCart: (state) => {
            state.items = [];
             
        },
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions