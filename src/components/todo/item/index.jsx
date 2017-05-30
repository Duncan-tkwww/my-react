import React, { PropTypes } from 'react';

export class TodoItem extends React.Component {
    render() {
        return(
                <li>
                    {this.props.text}
                </li>
            )
    }
}