import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import createBrowserHistory from "history/createBrowserHistory";
// const history = createBrowserHistory()

import Home from './views/Home'
import Movie from './views/Movie'


const BaseRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie" component={Movie} />
    </Switch>
  </BrowserRouter>
);

export default BaseRoute;