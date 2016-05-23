import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import PostItem from './PostItem.jsx'


class PostPage extends Component{


    renderTasks(){
        return this.props.posts.map((post)=>(
            <PostItem key={post._id} post={post}/>
        ));
    }



    render(){
        console.log(this.props.params.id);
        return (
            <div className="posts">
            {this.renderTasks()}
            </div>
        );
    }


}

PostPage.propTypes={
    posts:PropTypes.array.isRequired,
};

export default createContainer(()=>{
    console.log(this.props)
   Meteor.subscribe('onepost',this.props.id);

    return{

        posts:Posts.find({}).fetch(),
    };
},PostPage);