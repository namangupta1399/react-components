import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import NotFound from './NotFound';

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;
