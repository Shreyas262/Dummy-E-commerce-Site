import { createSlice } from "@reduxjs/toolkit";
import { loadWishlist } from "../../utils/localStorage";

const initialState = {
    items: loadWishlist(),
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return;
            } else {
                state.items.push(action.payload)
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearWishlist: (state) => {
            state.items = [];
        },
    }
})

export default wishlistSlice.reducer
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions