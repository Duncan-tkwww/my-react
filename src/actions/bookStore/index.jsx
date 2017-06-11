import actions from 'Actions/actions'

export function bookStoreAdd (book) {
    return {
        type: actions.BOOK_STORE_ADD,
        book
    }
}