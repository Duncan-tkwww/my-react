import { bindActionCreators } from 'redux'
import { bookStoreAdd } from 'Actions/bookStore'
import { bookCustomAdd, bookCustomDelete } from 'Actions/bookCustom'

export function bindAction (dispatch){
    bookCustom: {
        customAdd: bindActionCreators(bookCustomAdd,dispatch),
        customDelete: bindActionCreators(bookCustomDelete,dispatch)
    },
    bookStore: {
        storeAdd: bindActionCreators(bookStoreAdd,dispatch)
    }
};