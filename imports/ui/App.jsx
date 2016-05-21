import React, { Component } from 'react';
import PostsList from './PostsList.jsx'




// 不要在App前面添加 var
export default class App extends Component {

    render() {
        return (
            <div className="container">
                <header className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Microscope</a>
                    </div>
                </header>
                <div>
                   <PostsList />
                </div>
            </div>

        );
    }
}

