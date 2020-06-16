const number_reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'SQUARE':
            return (state ** 2).toFixed(3);
        case 'SQUARE_ROOT':
            return (Math.sqrt(state)).toFixed(3);
        default:
            return state;
    }
}

export default number_reducer;