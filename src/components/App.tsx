import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Hello from './Hello';
import Home from './Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/hello/" component={Hello} exact={true} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
