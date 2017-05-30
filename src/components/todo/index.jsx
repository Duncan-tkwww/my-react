import React, { PropTypes } from 'react';
import { TodoItem } from 'Components/todo/item';
import { createStore, combineReducers } from 'redux';

export class TodoList extends React.Component {
    render() {
        const divStyle = {
            backgroundColor: 'blue',
            height: '30px'
        };
        let todoItems = this.props.todos.map((key, value)=>{
            return <TodoItem key={key} text={value}/>
        });
        return (
                <div>
                    <ul>{todoItems}</ul>
                    <div style={divStyle} onClick={()=>this.handleClick()}></div>
                </div>
            )
    }
    handleClick() {
        let data = {
            text:{text:'xx'},
            number:{number:3}
        };
        let store = createStore(reducers);
        store.dispatch({
            type: 'TEXT',
            text: {
                text: 'text'
            }
        });
        console.log(store.getState())
    }
}

function todo(state={}, action) {
    switch (action.type) {
        case 'TEXT':
            console.log(state);
            return Object.assign({}, state, action.text);
        default:
            return state;
    }
}
function count(state={}, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, action.number);
        default:
            return state;
    }
}
const reducers = combineReducers({todo,count});