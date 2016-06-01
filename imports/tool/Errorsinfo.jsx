import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Errorsinfo extends Component {
    render() {
        return (
        <div className="alert alert-danger" role="alert">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            {this.props.error.message}
        </div>
        );
    }
}

Errorsinfo.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    error: PropTypes.object.isRequired,
};