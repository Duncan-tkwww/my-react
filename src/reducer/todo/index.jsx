
export function todo(state=[], action) {
    switch (action.type) {
        case 'ADD':
            return state.concat([action.text]);
        default:
            return state;
    }
}