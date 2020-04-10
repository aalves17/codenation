import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    )
}