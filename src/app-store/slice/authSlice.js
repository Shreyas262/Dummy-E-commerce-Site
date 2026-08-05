import { createSlice } from "@reduxjs/toolkit";
import { loadUser } from "../../utils/localStorage";

const user = loadUser();

const initialState = {
    isAuthenticated: Boolean(user),
    user,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.isAuthenticated = true;
            state.user = payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        updateUser: (state, { payload }) => {
            state.user = {
                ...state.user,
                ...payload
            };
        }
    }
})

export default authSlice.reducer
export const { login, logout, updateUser } = authSlice.actions 