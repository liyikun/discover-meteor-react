import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import { Link } from 'react-router'

export default class PostPage extends Component{

    upvotedClass() {
        var userId = Meteor.userId();
        if (userId && !_.include(this.props.post.upvoters, userId)) {
            return 'upvote btn btn-default ';
        } else {
            return 'upvote btn btn-default btn-primary upvotable';
        }
    }

    clickupvotable(event){
        event.preventDefault();
        var userId = Meteor.userId();
        if (userId && !_.include(this.props.post.upvoters, userId)) {
        Meteor.call('upvote', this.props.post._id);
        } else {
        Meteor.call('devote', this.props.post._id);
        }
    }


    render(){
        if(this.props.loading||!this.props.post) {
           return (<p>Loading...</p>);
       }else {
           // console.log(this.props.post);

            var postedit=Meteor.userId()==this.props.post.owner;
          //  console.log(postedit+"postedit")
            if(postedit){
                postinfo=(<p>
                {this.props.post.votes}Votes,
                    submitted by {this.props.post.username} &nbsp;&nbsp;commentsCount:{this.props.post.commentsCount}&nbsp;&nbsp;
                    <Link to={`/post/${this.props.post._id}/edit`}>edit</Link>&nbsp;&nbsp;
                    <Link to={`/post/${this.props.post._id}`}>comments</Link>
                </p>)
            }else{
                postinfo=(<p>
                     {this.props.post.votes}Votes,
                    submitted by {this.props.post.username}&nbsp;&nbsp;commentsCount:{this.props.post.commentsCount}&nbsp;
                </p>)
            }



            return (
                <div>
                <div className="post">
                    <Link to={'#'} className={this.upvotedClass()} onClick={this.clickupvotable.bind(this)}>⬆</Link>
                    <div className="post-content">
                        <h3>
                            <a href={this.props.post.url}>{this.props.post.title}</a>
                            <span></span>

                        </h3>
                    {postinfo}
                    </div>

                </div>
                    {this.props.children}
                </div>



            );
        }
    }


}

PostPage.propTypes={
    post:PropTypes.object.isRequired,
};

export default createContainer(({params})=>{

    var postid=params.postid;
    var onepost=Meteor.subscribe('onepost',postid);
  //  console.log(Posts.find({}).fetch());

  //  console.log(" log "+Posts.find().count()+"  this is Page ");

    var data={
       loading: !(onepost.ready()),
        post:Posts.findOne(),
    }
    return data;

},PostPage);