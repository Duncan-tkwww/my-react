import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { bookStore } from 'Reducers/bookStore'
import { bookCustom } from 'Reducers/bookCustom'
import { bindAction } from 'Actions/bindAction'

let rootRducer = combineReducers({
    bookStore,
    bookCustom
});
let store = createStore(rootRducer);
let actions = bindAction(store.dispatch);

render(
  <Provider store={store}>

  </Provider>
);