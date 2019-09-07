const InitialState = {
    count: 0,
};

const incrementCount = (state, action) => {
    return {
        ...state,
        count: state.count + 1,
    }
}

const decrementCount = (state, action) => {
    return {
        ...state,
        count: state.count - 1,
    }
}

export function Counter(state = InitialState, action) {
    switch(action.type) {
        case 'REQUEST_INCREMENT_COUNTER': return incrementCount(state, action);
        case 'REQUEST_DECREMENT_COUNTER': return decrementCount(state, action);
    default: 
        return state;
    }
}

