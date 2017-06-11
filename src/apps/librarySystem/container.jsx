import React from 'react';
import { connect } from 'react-redux'

class library extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};
const libraryApp = connect(
    mapStateToProps
)(library);
export default libraryApp