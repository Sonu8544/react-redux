import { configureStore } from '@reduxjs/toolkit';

// Merging All slice here
import counterSlice from './counter';
import authSlice from './auth';


export const { increment, decrement, increase, toggleCounter, multiply, divide } = counterSlice.actions;
export const { logIn, logOut } = authSlice.actions;

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export default store;
