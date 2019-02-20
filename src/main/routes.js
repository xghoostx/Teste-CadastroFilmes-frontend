import React from 'react';
import { Switch, Route, Redirect} from 'react-router';
import Home from '../components/content/home/Home';
import Register from '../components/content/register/Register';

export default props =>
        <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to="/"/>
        </Switch>    


