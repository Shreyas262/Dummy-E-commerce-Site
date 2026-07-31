import { createSlice } from "@reduxjs/toolkit";
import { loadUser } from "../../utils/localStorage";

const initialState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions 