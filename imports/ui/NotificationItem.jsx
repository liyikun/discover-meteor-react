import React, { Component,PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts.js';


export default class NotificationItem extends Component{

        render(){
            console.log("   name   "+this.props.notifications.commenterName)
            return(
            <li>
                <Link to={`post/${this.props.notifications.postId}`}>
                    <strong>{this.props.notifications.commenterName}</strong> commented on your post
                </Link>
            </li>)
        }

}

NotificationItem.propTypes={
    notifications:PropTypes.object.isRequired,
};