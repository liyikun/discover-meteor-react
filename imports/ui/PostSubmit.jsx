import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Posts } from '../api/posts.js';
import { Meteor } from 'meteor/meteor';
import { Errors } from '../api/errors.js';


export default class PostSubmit extends Component{

    handSubmit(event){
        event.preventDefault();

        const url=ReactDOM.findDOMNode(this.refs.url).value.trim();
        const title=ReactDOM.findDOMNode(this.refs.title).value.trim();

        console.log(url+""+title);

         var post={
            url,
            title,
         }

        Meteor.call('posts.insert',post,function(error,result){
            if (error&&error.error==="not-authorized"){
                Errors.insert({message:"Please log in!"})
                throwError(error.reason);
            }

            if(result.postExists){
                Errors.insert({message:"Post has been！"})
            }
        });



    }



    render(){
        return(<form className="main form"  onSubmit={this.handSubmit.bind(this)}>
            <div className="form-group">
                <label className="control-label" for="url">URL</label>
                <div className="controls">
                    <input  type="text" ref="url"  placeholder="Your URL" className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label" for="title">Title</label>
                <div className="controls">
                    <input  type="text" ref="title" placeholder="Name your post" className="form-control"/>
                </div>
            </div>
            <input type="submit" ref="Submit" className="btn btn-primary"/>
        </form>
        )
    }
}