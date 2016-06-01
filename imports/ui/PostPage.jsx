import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import { Link } from 'react-router'

export default class PostPage extends Component{




    render(){
        if(this.props.loading||!this.props.post) {
           return (<p>Loading...</p>);
       }else {
            console.log(this.props.post);

            var postedit=Meteor.userId()==this.props.post.owner;
            console.log(postedit+"postedit")
            if(postedit){
                postinfo=(<p>
                    submitted by{this.props.post.username}
                    <Link to={`/post/${this.props.post._id}/edit`}>edit</Link>
                </p>)
            }else{
                postinfo=(<p>
                    submitted by{this.props.post.username}
                </p>)
            }



            return (
                <div>
                <div className="post">
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