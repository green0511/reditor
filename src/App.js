import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import loadable from "@loadable/component";

import Home from './page/Home/Home';

const Article = loadable(() => import('./page/Article/Article'));
const Edit = loadable(() => import('./page/Edit/Edit'));

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
