import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false // Corrected typo from isAuthanticated to isAuthenticated
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },

        logOut(state) {
            state.isAuthenticated = false;
        },
    }
});

export default authSlice