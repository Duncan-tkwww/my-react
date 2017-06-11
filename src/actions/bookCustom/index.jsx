import actions from 'Actions/actions'

export function bookCustomAdd (book) {
    return {
        type: actions.BOOK_CUSTOM_ADD,
        book
    }
}

export function bookCustomDelete (book) {
    return {
        type: actions.BOOK_CUSTOM_DELETE,
        book
    }
}