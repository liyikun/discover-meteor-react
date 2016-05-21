import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import PostItem from './PostItem.jsx'


class PostsList extends Component{


    renderTasks(){
        return this.props.posts.map((post)=>(
            <PostItem key={post._id} post={post}/>
        ));
    }



    render(){
        return (
            <div className="posts">
            {this.renderTasks()}
            </div>
        );
    }


}

PostsList.propTypes={
    posts:PropTypes.array.isRequired,
};

export default createContainer(()=>{
    Meteor.subscribe('allposts');

    return{
        posts:Posts.find({}).fetch(),
    };
},PostsList);