import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 1, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
    }
});

export default counterSlice