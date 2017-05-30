import React from 'react';
import { TodoList } from 'Components/todo';

const TodosConfig = ['txt1', 'txt2', 'txt3'];

export default class App extends React.Component {
    render() {
        return (
            <TodoList todos={ TodosConfig }/>
        );
    }
}