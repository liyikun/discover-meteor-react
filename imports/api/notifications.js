import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check';

export const Notifications = new Mongo.Collection('notifications');



Meteor.methods({
    'notifications.insert'(notifications){
        check(notifications,{
            userId:String,
            postId:String,
            commentid:String,
            commenterName:String,
        })


    if(!this.userId){
        throw new Meteor.Error('not-authorized');
    }


        notifications.read=false;

        console.log("notifications is "+notifications);

        notificationid=Notifications.insert(notifications);

        return notificationid;
    },


'notifications.update'(){

    if(!this.userId){
        throw new Meteor.Error('not-authorized');
    }

    console.log("find now "+Notifications.find({userId:this.userId}).fetch());

    updateresult=Notifications.update({userId:this.userId},{$set:{'read':true}});

    console.log("find afer "+Notifications.find({userId:this.userId}).fetch());

    return updateresult;
},


});


if (Meteor.isServer) {
    Meteor.publish('notifications',(userid)=>{
        return Notifications.find({userId:userid});
    });

}
