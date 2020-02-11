import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page from './Page';
import Post from './Post';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
           <Route path="/" component={App} exact/>
           <Route path="/page" component={Page}/>
           <Route path="/post" component={Post} />
           <Route component={() => <div>Page 404</div>}/>
        </Switch>
    </BrowserRouter>
    
    
    , document.getElementById('root'));


