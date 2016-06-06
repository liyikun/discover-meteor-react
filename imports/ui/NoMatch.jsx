import React, { Component, PropTypes } from 'react';




export default class NoMatch extends Component {

    render(){
        return(
            <div className="not-found jumbotron">
                <h2>404</h2>
                <p>Sorry, we couldn't find a page at this address. 抱歉，我们无法找到该页面。</p>
            </div>
        )
    }
}