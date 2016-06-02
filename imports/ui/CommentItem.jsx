import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Comments} from '../api/comments.js'
import { Posts } from '../api/posts.js';
import Commentinfo from './Commentinfo.jsx'


export default class CommentItem extends Component{

    renderComments(){
        return this.props.comments.map((comment)=>(
            <Commentinfo key={comment._id} comment={comment}/>
        ));
    }

    commentSubmit(event){
        event.preventDefault();

        const body=ReactDOM.findDOMNode(this.refs.body).value.trim();
        const postId=Posts.findOne()._id;
        console.log(" body "+body+" postId "+postId);


        var commentsText={
            body,
            postId
        }

        Meteor.call('commentltem.insert',commentsText,function(error){
            if (error&&error.error==="not-authorized"){
                Errors.insert({message:"Please log in!"})
                throwError(error.reason);
            }

        });

    }


    render(){

        if(this.props.loading||!this.props.comments) {
            return (<p>Loading...</p>);
        }else {

            return (
                <div>
                    <ul className="comments">
                    {this.renderComments()}
                    </ul>
                    <form  className="comment-form form" onSubmit={this.commentSubmit.bind(this)}>
                        <div className="form-group ">
                            <div className="controls">
                                <input  type="text" ref="body" placeholder="Please Input Comments" className="form-control"/>
                            </div>
                        </div>
                        <button type="submit" ref="Submit" className="btn btn-primary">Add Comment</button>
                    </form>


                </div>
            );
        }
    }

}


CommentItem.propTypes={
    comments:PropTypes.array.isRequired,
};

export default createContainer(()=>{

    const postid=Posts.findOne()._id;

    var subComment=Meteor.subscribe('postcomments',postid);
   console.log(" postid "+postid);
   console.log("Comments item  "+Comments.find({postId:postid}).fetch());
    var data={
        loading: !(subComment.ready()),
        comments:Comments.find({postId:postid}).fetch()
    }
    return data;

},CommentItem);