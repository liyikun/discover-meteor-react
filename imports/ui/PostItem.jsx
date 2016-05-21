import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';


export default class PostItem extends Component {




    render() {
        return (
            <div className="post">
                <div className="post-content">
                    <h3><a href={this.props.post.url}>{this.props.post.title}</a><span></span></h3>
                </div>
            </div>
        );



    }
}

PostItem.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    post: PropTypes.object.isRequired,
};