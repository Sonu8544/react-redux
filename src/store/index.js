import { createStore } from 'redux'


const counterReducer = (state = { counter: 10 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    // if(action.type === 'increment' && action.type === 'decrement'){
    //     return{
    //         counter: 
    //     }
    // }

    return state;
}

const store = createStore(counterReducer);

export default store;