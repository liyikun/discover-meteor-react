import React, { Component } from 'react';
import PostsList from './PostsList.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



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
                    <ReactCSSTransitionGroup component="div"  transitionName="example"  transitionEnterTimeout={500}  transitionLeaveTimeout={300}
                    >
                      {React.cloneElement(this.props.children, {
                          key: this.props.location.pathname
                      })}
                    </ReactCSSTransitionGroup>
                </div>
            </div>

        );
    }
}



