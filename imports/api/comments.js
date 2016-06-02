import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from '../api/posts.js';
export const Comments = new Mongo.Collection('comments');



Meteor.methods({
    'commentltem.insert'(commentsText){
        check(commentsText,{
            body:String,
            postId:String
        });

    if(!this.userId){
        throw new Meteor.Error('not-authorized');
    }

    commentsText.submittedText=new Date();

    commentsText.userId=this.userId;

    commentsText.author=Meteor.users.findOne(this.userId).username;

    commentid=Comments.insert(commentsText);

    Posts.update(commentsText.postId,{$inc:{commentsCount:1}});

    return commentid;

    },



});






if (Meteor.isServer) {
    Meteor.publish('postcomments',(postid)=>{
        return Comments.find({postId:postid});
    });

}
