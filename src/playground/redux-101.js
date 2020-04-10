import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ introducedValue }) => ({
    type: 'SET',
    introducedValue
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };

        case 'SET': 
            return {
                count: action.introducedValue
        };

        case 'RESET': 
            return {
                count: state.count = 0
            };

        default: 
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 20 }));

store.dispatch(setCount({ introducedValue: 50 }));

store.dispatch(decrementCount({ decrementBy: 30 }));

store.dispatch(setCount({ introducedValue: 120 }));

store.dispatch(resetCount());