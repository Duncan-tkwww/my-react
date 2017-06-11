import actions from 'Actions/actions'

const initialState = {
    id: 1,
    name: 'book1',
    type: 'store',
    remain: 10,
    all: 10
};

export function bookStore (state, action){
    switch (action.type){
        case actions.BOOK_STORE_ADD:
            return Object.assign({}, state, {remain: state.remain + 1});
        default:
            return state
    }
}