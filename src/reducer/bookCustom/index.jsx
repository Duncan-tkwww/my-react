import actions from 'Actions/actions'

const initialState = {
    id: 1,
    name: 'book1',
    type: 'custom',
    need: 0
};

export function bookCustom (state, action){
    switch (action.type){
        case actions.BOOK_CUSTOM_ADD:
            return Object.assign({}, state, {need: state.need + 1});
        case actions.BOOK_CUSTOM_DELETE:
            return Object.assign({}, state, {need: state.need - 1});
        default:
            return state
    }
}