import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check';


export const Posts = new Mongo.Collection('posts');

Meteor.methods({
    'posts.insert'(post){
        check(post,{
            title:String,
            url:String
        });

        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }


        var postWithSameLink=Posts.findOne({url:post.url});

        if (postWithSameLink){
            return {
                postExists:true,
                _id:postWithSameLink._id
            }
        }

        post.createAt=new Date();

        post.owner=this.userId;

        post.username=Meteor.users.findOne(this.userId).username;

        post.commentsCount=0;

        post.upvoters=[];

        post.votes= 0;

        postid=Posts.insert(post);

        return {
            insertid:postid
        }

    },

    'posts.remove'(postid){
        check(postid,{
            id:String,
            owner:String
        });


        if(this.userId==postid.owner){
            Posts.remove(postid.id);
        }else{
            throw new Meteor.Error('not-authorized');
        }

    },

    'posts.update'(post){
        check(post,{
            id:String,
            owner:String,
            title:String,
            url:String
        });

        console.log(this.userId+" "+post.owner);
        if(!(this.userId==post.owner)){
            throw new Meteor.Error('not-authorized');
        }

        var currentPostId=post.id;

       // console.log("current id"+currentPostId);


        var updatepost={
            url:post.url,
            title:post.title
        }

        var uppostid=Posts.update(currentPostId,{$set:updatepost})

        return uppostid;
    },


    'upvote'(postId) {
        check(this.userId, String);
        check(postId, String);
        var post = Posts.findOne(postId);
        if (!post)
            throw new Meteor.Error('invalid', 'Post not found');
        if (_.include(post.upvoters, this.userId))
            throw new Meteor.Error('invalid', 'Already upvoted this post');
        Posts.update(post._id, {
            $addToSet: {upvoters: this.userId},
            $inc: {votes: 1}
        });
    },

    'devote'(postId) {
        check(this.userId, String);
        check(postId, String);
        var post = Posts.findOne(postId);
        if (!post)
            throw new Meteor.Error('invalid', 'Post not found');
        if (!_.include(post.upvoters, this.userId))
            throw new Meteor.Error('invalid', 'Already upvoted this post');
        Posts.update(post._id, {
            $pull: {upvoters:this.userId},
            $inc: {votes:-1}
        });
    },



});



if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('allposts', function () {
        return Posts.find();
    });

    Meteor.publish('onepost',function (postid){
        return Posts.find({_id:postid});
    })

}
