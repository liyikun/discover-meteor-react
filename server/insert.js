import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts.js';
import {Comments} from '../imports/api/comments.js'
import {Notifications} from '../imports/api/notifications.js'

if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}

if(Comments.find().count()===0){
    Comments.insert({
        postId:'MEkkP2tt7KsdKXAeN',
        userId:'Rn9SyMYRcdQKXq5pu',
        author:'liyikun',
        submittedText: new Date(),
        body: 'You sure can Tom!'
    });
}

if(Notifications.find().count()===0){
    Notifications.insert({
        userId:'String',
        postId:'String',
        commentid:'String',
        commenterName:'String',
        read:true
    })
}