import React, { Component,PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {Notifications}  from '../api/notifications.js'
import NotificationItem from './NotificationItem.jsx'
import { Link } from 'react-router'
import { Errors } from '../api/errors.js';


export default class Notificationspage extends Component{


    notificationCount(){
        if(this.props.count){
            return( <span className="badge badge-inverse">{this.props.count}</span>)
        }
    }

    notificationItem(){
        if(this.props.count){
            return this.props.notifications.map((notifications)=>{
                <NotificationItem key={notifications._id} notifications={notifications}/>})
        }else{
            return(
                <li><span>No Notifications</span></li>
            )
        }
    }

    removeNotifications(event){
        event.preventDefault()

        Meteor.call('notifications.update',function(error) {
                if (error && error.error === "not-authorized") {
                    Errors.insert({message: "Please log in!"})
                    throwError(error.reason);
                }
            }
            )
    }


    render(){
        return(
        <div>
        <Link to={'#'} className="dropdown-toggle" data-toggle="dropdown" onClickCapture={this.removeNotifications.bind(this)}>
            Notifications
            {this.notificationCount()}
            <b className="caret"></b>
        </Link>
        <ul className="notification dropdown-menu">
            {this.notificationItem()}
        </ul>
        </div>
        )
    }


}

Notificationspage.propTypes={
    notifications:PropTypes.array.isRequired,
    count:PropTypes.number.isRequired
};

export default createContainer(()=>{

    var userid=Meteor.userId();

    var subNotification=Meteor.subscribe('notifications',userid);


    return {
        notifications:Notifications.find({userId:userid,read:false}).fetch(),
        count:Notifications.find({userId:userid,read:false}).count()
    };

}, Notificationspage);