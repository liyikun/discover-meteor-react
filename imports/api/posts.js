import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('allposts', function postsPublication() {
        return Posts.find();
    });

    Meteor.publish('onepost',function onepostPublication(postid){
        return Posts.find({_id:postid});
    })

}
