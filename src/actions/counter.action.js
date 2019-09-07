function requestIncrementCounter() {
    return {
        type: 'REQUEST_INCREMENT_COUNTER',
    }
}

export const incCount = () => {
    return (dispatch => {
        dispatch(requestIncrementCounter());
    })
}

function requestDecrementCounter(count) {
    return {
        type: 'REQUEST_DECREMENT_COUNTER',
        payload: count,
    }
}

export const decCount = (count) => {
    return (dispatch => {
        dispatch(requestDecrementCounter(count));
    })
}