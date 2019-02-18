import React from 'react';
import { Switch, Route, Redirect} from 'react-router';
import Search from '../components/content/search/Search';
import Register from '../components/content/register/Register';

const Routes = () => (
        <Switch> 
            <Route exact path="/" component={Search} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to="/"/>
        </Switch>
);

export default Routes;