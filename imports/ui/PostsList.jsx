import React, { Component,PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import PostItem from './PostItem.jsx'


export default class PostsList extends Component{



    renderTasks(){
        return this.props.posts.map((post)=>(
                <PostItem key={post._id} post={post}/>
        ));
    }




    render(){
        if(this.props.loading||!this.props.posts) {
            return (<p>Loading...</p>);
        }else {
            console.log("this is list");
            //console.log(Posts.find({}).fetch());
            return (
                <div className="posts">
                    {this.renderTasks()}
                </div>
            );

        }
    }


}

PostsList.propTypes={
    posts:PropTypes.array.isRequired,
};

export default createContainer(()=>{
    var allpost=Meteor.subscribe('allposts');

    console.log(" list "+Posts.find().count()+"this is allposts ");
    return {
        loading: !(allpost.ready()),
        posts:Posts.find({},{sort: {createAt: -1}}).fetch(),
    };
}, PostsList);