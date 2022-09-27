/**
 * accountReducer
 * @param {number} state - inital state will be 0
 * @param {Object} action - action = { type: string, payload: number}
 * @returns {number} - state
 */
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;
