import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Link } from 'react-router'
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Errorslist from '../tool/Errors.jsx';
import Notificationspage from './Notificationspage.jsx'

// 不要在App前面添加 var
export default class App extends Component {



    render() {

        return (
            <div className="container">
                <header className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={'/'}>Microscope</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/submit"}>Submit Post</Link></li>

                        </ul>
                        <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <Notificationspage/>
                        </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <AccountsUIWrapper/>
                        </ul>
                    </div>
                </header>
                <Errorslist/>
                <div id="main" className="row-fluid">
                    {this.props.children}
                </div>
            </div>

        );
    }
}



