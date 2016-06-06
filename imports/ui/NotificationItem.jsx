import React, { Component,PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts.js';
import { Link } from 'react-router'

export default class NotificationItem extends Component{



    removeNotifications(event){
           // event.preventDefault()



        Meteor.call('notifications.update',this.props.notifications._id,function(error) {
                if (error && error.error === "not-authorized") {
                    Errors.insert({message: "Please log in!"})
                    throwError(error.reason);
                }
            }
        )


        }


        render(){
            return(
            <li>
                <Link to={`/post/${this.props.notifications.postId}`} onClick={this.removeNotifications.bind(this)}>
                    <strong>{this.props.notifications.commenterName}</strong> commented on your post
                </Link>
            </li>)
        }


}

NotificationItem.propTypes={
    notifications:PropTypes.object.isRequired,
};