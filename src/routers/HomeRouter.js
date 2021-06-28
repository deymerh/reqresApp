import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Users } from '../pages/Users';
import { Create } from '../pages/Create';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import axios from 'axios';

export const HomeRouter = ({ history }) => {
  const [isToken, setIsToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsToken(token);
    if (!token) {
      history.replace('/login');
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [isToken, history]);
  return (
    <>
      <Header />
      <div className="homeRouter">
        <div>
          <Sidebar />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/usuarios" component={Users} />
            <Route exact path="/crear" component={Create} />
          </Switch>
        </div>
      </div>
    </>
  )
}
