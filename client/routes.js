import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';
import PostsList from '../imports/ui/PostsList.jsx';
import PostPage from '../imports/ui/PostPage.jsx'


export const renderRoutes = () =>(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={PostsList}/>
            <Route path="post/:id" component={PostPage}/>
        </Route>
    </Router>
);
