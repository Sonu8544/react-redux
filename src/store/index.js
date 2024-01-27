import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 1, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },

        increase(state, action) {
            state.counter += action.payload;
        },

        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },

        multiply(state, action) {
            state.counter *= action.payload;
        },

        devide(state, action) {
            state.counter /= action.payload;
        }
    }
});

export const { increment, decrement, increase, toggleCounter, multiply, devide } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
