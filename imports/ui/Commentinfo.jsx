import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


export default class Commentinfo extends Component {

    submittedText(){
        return this.props.comment.submittedText.toString();
    }

    render() {
        console.log("haha");
        return (

            <li>
                <h4>
                    <span className="author">{this.props.comment.author}</span>
                    <span className="date">on {this.submittedText()}</span>
                </h4>
                <p>{this.props.comment.body}</p>
            </li>

        );
    }
}

Commentinfo.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    comment:PropTypes.object.isRequired,
};