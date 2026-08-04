import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {

        setWishlist: (state, { payload }) => {
            state.items = payload;
        },

        addToWishlist: (state, { payload }) => {
            const existingItem = state.items.find(item => item.id === payload.id);
            if (existingItem) {
                return;
            }
            state.items.push(payload)
        },
        removeFromWishlist: (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload);
        },
        clearWishlist: (state) => {
            state.items = [];
        },
    }
})

export default wishlistSlice.reducer
export const { setWishlist, addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions