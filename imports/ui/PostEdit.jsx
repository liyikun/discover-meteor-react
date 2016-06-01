import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts.js';


export default class PostEdit extends Component{


    Postinfo(){
        var thispost=Posts.findOne();
        return thispost;
    }

    Postupdate(event){
        event.preventDefault();

        const url=ReactDOM.findDOMNode(this.refs.url).value.trim();
        const title=ReactDOM.findDOMNode(this.refs.title).value.trim();
        const id=this.Postinfo()._id;
        const owner=this.Postinfo().owner;


        //console.log("id"+id);
        var post={
            id,
            owner,
            url,
            title,

        }

       // console.log(" this is edit "+post.url+" "+post.title)
        Meteor.call('posts.update',post,function(error,result){
            if (error){
                return alert(error.reason);
            }

        });
    }


    PostDelete(event){
        event.preventDefault();

        const id=this.Postinfo()._id;
        const owner=this.Postinfo().owner;

        var postid={
            id,
            owner,
        }

        Meteor.call('posts.remove',postid,function(error,result){
            if (error){
                return alert(error.reason);
            }

        });
    }

    render(){
            return (

                <form className="main form" onSubmit={this.Postupdate.bind(this)}>
                    <div className="form-group">
                        <label className="control-label" for="url">URL</label>
                        <div className="controls">
                            <input  ref="url" type="text" defaultValue={this.Postinfo().url} placeholder="Your URL" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label" for="title">Title</label>
                        <div className="controls">
                            <input ref="title" type="text" defaultValue={this.Postinfo().title} placeholder="Name your post" className="form-control"/>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary submit"/>
                    <hr/>
                    <button className="btn btn-danger delete" onClick={this.PostDelete.bind(this)}>Delete post</button>
                </form>
            )

    }


}



