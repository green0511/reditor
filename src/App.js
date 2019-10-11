import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './page/Home/Home';
import Article from './page/Article/Article';
import Edit from './page/Edit/Edit';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
