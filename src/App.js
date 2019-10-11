import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './page/Home/Home';
import Article from './page/Article/Article';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
