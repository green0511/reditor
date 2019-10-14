import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './page/Home/Home';
import Article from './page/Article/Article';
import Edit from './page/Edit/Edit';

console.log(process.env);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route path="/edit/:id?">
          <Edit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
