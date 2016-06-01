import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Link } from 'react-router'
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Errorslist from '../tool/Errors.jsx';


// 不要在App前面添加 var
export default class App extends Component {



    render() {

        return (
            <div className="container">
                <header className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to={'/'}>Microscope</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="navigation">
                        <ul class="nav navbar-nav">
                            <li><Link to={"/submit"}>Submit Post</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <AccountsUIWrapper/>
                        </ul>
                    </div>
                </header>
                <Errorslist/>
                <div id="main" class="row-fluid">
                    {this.props.children}
                </div>
            </div>

        );
    }
}



