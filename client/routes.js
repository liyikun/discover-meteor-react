import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import App from '../imports/ui/App.jsx';
import PostsList from '../imports/ui/PostsList.jsx';
import PostPage from '../imports/ui/PostPage.jsx'
import PostSubmit from '../imports/ui/PostSubmit.jsx'
import PostEdit from '../imports/ui/PostEdit.jsx'
import CommentItem from '../imports/ui/CommentItem.jsx'
import NoMatch from '../imports/ui/NoMatch.jsx'

export const renderRoutes = () =>(
    <Router history={browserHistory} >
        <Route path="/"  component={App}>
            <IndexRoute component={PostsList}/>
            <Route path="/post/:postid" component={PostPage}>
                <IndexRoute component={CommentItem}/>
                <Route path="/post/:postid/edit" component={PostEdit}/>
            </Route>
            <Route path="/submit" component={PostSubmit}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>
);
