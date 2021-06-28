import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Login } from '../pages/Login';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" component={HomeRouter} />
        </Switch>
      </div>
    </Router>
  )
};